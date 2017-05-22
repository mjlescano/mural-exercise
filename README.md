# Mural Exercise

Project to resolve the [Front End Developer Exercise](docs/MURALFrontEndDeveloper.pdf) for [MURAL](https://mural.co).

The app can be seen working [here](https://expo.io/@mjlescano/mural-exercise) with any Android or iOS phone, or following the [Getting Started](#getting-started) instructions.

**Developing notes can be found at [NOTES.md](NOTES.md)**

## Getting Started

You'll need to have Node v6, NPM v3+, or a recent version of Yarn.

First, clone this repo and run `npm install` to install all the required dependencies.

After that you will be able to run the app with the following commands:

#### `npm start`

Runs the app in development mode and you will be able to open it in the [Expo app](https://expo.io) on your phone.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

> For the emulator, I recommend using the iPad 2 as hardware, because of the lack of zoom-in/out

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

## Technologies

* [React Native](https://facebook.github.io/react-native/)
* [Create React Native App](https://github.com/react-community/create-react-native-app).
  * Used for developing and bundling the app for iOS and Android
* [Redux](http://redux.js.org/)
  * For Managing the state of the app
* [Eslint](http://eslint.org/)
  * To keep neat and tidy the JS code
  * [`eslint-config-democracyos`](https://github.com/DemocracyOS/eslint-config-democracyos) to add [Standard](https://standardjs.com/rules) and some other niceities.
  * [`eslint-plugin-react-native`](https://github.com/Intellicode/eslint-plugin-react-native) for React Native specific rules.

## Features

* Add/Edit/Remove/Duplicate Sticky

## Tests

For now, there's only a test to verify if the app builds without crashing, run it with: `npm run test`.
