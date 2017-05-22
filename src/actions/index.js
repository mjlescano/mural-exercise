export const addItem = (data) => ({
  type: 'ADD_ITEM',
  payload: data
})

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: { id }
})

export const editItem = (id) => ({
  type: 'EDIT_ITEM',
  payload: { id }
})

export const uneditItem = (id) => ({
  type: 'UNEDIT_ITEM',
  payload: { id }
})

export const selectItem = (id) => ({
  type: 'SELECT_ITEM',
  payload: { id }
})

export const unselectItem = (id) => ({
  type: 'UNSELECT_ITEM',
  payload: { id }
})

export const unselectAllItems = () => ({
  type: 'UNSELECT_ALL_ITEMS'
})

export const updateItemText = (id, text) => ({
  type: 'UPDATE_ITEM_TEXT',
  payload: { id, text }
})

export const duplicateItem = (id) => ({
  type: 'DUPLICATE_ITEM',
  payload: { id }
})
