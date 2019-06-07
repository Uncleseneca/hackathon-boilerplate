import { createClearRedux } from 'redux-clear'

const { reducer, actions } = createClearRedux(
  {
    add: () => list => list,
    reset: () => () => []
  },
  [],
  'task-list'
)

export { reducer, actions }
