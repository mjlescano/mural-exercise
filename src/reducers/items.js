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

  REMOVE_ITEMS: (state, { ids }) => (
    state.filter((item) => !ids.includes(item.id))
  ),

  SELECT_ITEM: (state, { id }) => state.map((item) => {
    if (item.id === id) return { ...item, selected: true }
    if (!item.selected) return item
    return { ...item, selected: false }
  }),

  UNSELECT_ITEM: (state, { id }) => state.map((item) => {
    if (item.id === id) return { ...item, selected: false }
    return item
  })
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}
