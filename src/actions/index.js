export const addItem = (data) => ({
  type: 'ADD_ITEM',
  payload: data
})

export const removeItems = (ids) => ({
  type: 'REMOVE_ITEMS',
  ids
})

export const selectItem = (id) => ({
  type: 'SELECT_ITEM',
  id
})

export const unselectItem = (id) => ({
  type: 'UNSELECT_ITEM',
  id
})
