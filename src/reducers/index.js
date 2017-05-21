import { combineReducers } from 'redux'
import items from './items'

export default combineReducers({
  items
})

// It's weird to have a getter here, but for the complexity of the app,
// there's no need to use something like https://github.com/reactjs/reselect
// for now...

export const getItems = (state) => state.items.slice()

export const getSelectedItemsIds = (state) => (
  state.items.filter((item) => item.selected).map((item) => item.id)
)
