export const addItem = (data) => ({
  type: 'ADD_ITEM',
  payload: data
})

export const removeItems = (ids) => ({
  type: 'REMOVE_ITEMS',
  ids
})

export const editItem = (id) => ({
  type: 'EDIT_ITEM',
  id
})

export const uneditItem = (id) => ({
  type: 'UNEDIT_ITEM',
  id
})

export const selectItem = (id) => ({
  type: 'SELECT_ITEM',
  id
})

export const unselectItem = (id) => ({
  type: 'UNSELECT_ITEM',
  id
})

export const updateItemText = (id, text) => ({
  type: 'UPDATE_ITEM_TEXT',
  id,
  text
})
