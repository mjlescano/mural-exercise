import shortid from 'shortid'

export const addSticky = (data) => ({
  type: 'ADD_STICKY',
  payload: {
    ...data,
    id: shortid.generate(),
    kind: 'sticky'
  }
})
