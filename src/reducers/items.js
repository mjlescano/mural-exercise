import shortid from 'shortid'

const initialState = []

const reducers = {
  ADD_ITEM: (state, action) => ([
    ...state,
    {
      kind: 'sticky',
      text: '',
      selected: false,
      editing: false,
      ...action.payload,
      id: shortid.generate()
    }
  ]),

  REMOVE_ITEM: (state, { id }) => state.filter((item) => id !== item.id),

  EDIT_ITEM: (state, { id }) => state.map((item) => {
    if (item.id === id) return { ...item, editing: true, selected: true }
    if (!item.editing && !item.selected) return item
    return { ...item, editing: false, selected: false }
  }),

  UNEDIT_ITEM: (state, { id }) => state.map((item) => {
    if (item.id === id) return { ...item, editing: false }
    return item
  }),

  SELECT_ITEM: (state, { id }) => state.map((item) => {
    if (item.id === id) return { ...item, selected: true }
    if (!item.editing && !item.selected) return item
    return { ...item, selected: false, editing: false }
  }),

  UNSELECT_ITEM: (state, { id }) => state.map((item) => {
    if (item.id === id) return { ...item, selected: false, editing: false }
    return item
  }),

  UNSELECT_ALL_ITEMS: (state) => state.map((item) => {
    if (!item.editing && !item.selected) return item
    return { ...item, selected: false, editing: false }
  }),

  UPDATE_ITEM_TEXT: (state, { id, text }) => state.map((item) => {
    if (item.id === id) return { ...item, text }
    return item
  }),

  DUPLICATE_ITEM: (state, { id }) => {
    let original

    const items = state.map((item) => {
      if (item.id !== id) return item
      original = item
      return { ...original, selected: false, editing: false }
    })

    items.push({
      ...original,
      position: original.position.map((pos) => pos - 30),
      selected: true,
      editing: true
    })

    return items
  }
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}
