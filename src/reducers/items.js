const initialState = []

const reducers = {
  ADD_STICKY: (state, action) => ([
    ...state,
    action.payload
  ])
}

export default (state = initialState, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  } else {
    return state
  }
}
