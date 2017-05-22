# Notes

This doc is where I'm going to be annotating all the major decisions I make. It's not documentation, is something more like a "diary", so it's not going to have a lot of sense time-wise and is everything but thorough.

## MVP

Decided to go with [React Native](https://facebook.github.io/react-native/) and [Redux](http://redux.js.org/). This repo is already initialized using [Create React Native App](https://github.com/react-community/create-react-native-app) so I don't have to preoccupy about bundling, etc, for now.

Defined an MVP following the instructions at the [exercise](docs/MURALFrontEndDeveloper.pdf). These are the features I want to implement, adapted for mobile, and without the copy and paste in favor of duplication:

- [x] Double tap background to add sticky note on tap position
- [x] A sticky note should have editable text
- [x] A sticky note should be deletable
- [x] Tap to select a sticky note
- [x] When a sticky note is selected, the user should be able to:
  - [x] delete it
  - [x] edit it
- [x] A sticky note should be duplicable

The Redux state should look something like:

```
{
  items: [
    {
      id: 'some-random-string',
      kind: 'sticky',
      position: [0, 0],
      text: 'Some example text',
      selected: true,
      editing: true
    },
    ...
  ]
}
```

* defining `kind: 'sticky'` for when is going to be more than stickies
* the `position` is relative to the center of the mural (and screen) because I want the mural to not have boundaries.

## Next Steps

After having the MVP working, the next steps would be to:

- [ ] Move a Sticky's position with scrollTouch
- [ ] Move the mural with scrollTouch
  * maybe using this lib: https://github.com/ldn0x7dc/react-native-view-transformer
- [ ] Zoom-in and out with Pinch Gesture
  * maybe using this lib: https://github.com/ldn0x7dc/react-native-view-transformer
- [ ] Save the current state of the app on the storage
  * Using [this](https://github.com/sunnylqm/react-native-storage) lib, which allows to an easy implementation for web, and also it's very easy to extend it for an eventual backend sync.
