import { getNewerItem } from '../reducers'

export const addItem = (data) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_ITEM',
    payload: data
  })

  const { id } = getNewerItem(getState())

  dispatch(editItem(id))
}

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id
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

export const unselectAllItems = () => ({
  type: 'UNSELECT_ALL_ITEMS'
})

export const updateItemText = (id, text) => ({
  type: 'UPDATE_ITEM_TEXT',
  id,
  text
})

export const duplicateItem = (id) => ({
  type: 'DUPLICATE_ITEM',
  id
})
