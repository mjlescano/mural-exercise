import { combineReducers } from 'redux'
import items from './items'

export default combineReducers({
  items
})

// It's weird to have a getter here, but for the complexity of the app,
// there's no need to use something like https://github.com/reactjs/reselect
// for now...

export const getItem = (state, id) => state.items.find((item) => item.id === id)

export const getItems = (state) => state.items.slice()

export const getSelectedItemId = (state) => {
  const item = state.items.find((item) => item.selected)
  if (!item) return null
  return item.id
}
