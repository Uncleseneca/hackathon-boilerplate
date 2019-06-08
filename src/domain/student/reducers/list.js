import { createClearRedux } from 'redux-clear'

const { reducer, actions } = createClearRedux(
  {
    add: () => list => list,
    reset: () => () => []
  },
  [],
  'student-list'
)

export { reducer, actions }
