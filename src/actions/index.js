export const addSticky = (data) => ({
  type: 'ADD_STICKY',
  payload: data
})

export const selectItem = (id) => ({
  type: 'SELECT_ITEM',
  id
})

export const unselectItem = (id) => ({
  type: 'UNSELECT_ITEM',
  id
})
