import shortid from 'shortid'

const initialState = []

const reducers = {
  ADD_STICKY: (state, action) => ([
    ...state,
    {
      text: '',
      selected: false,
      editing: false,
      ...action.payload,
      id: shortid.generate(),
      kind: 'sticky'
    }
  ])
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}
