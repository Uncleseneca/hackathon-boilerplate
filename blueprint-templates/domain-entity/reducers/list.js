import { createClearRedux } from 'redux-clear'

const { reducer, actions } = createClearRedux(
  {
    add: () => list => list,
    reset: () => () => []
  },
  [],
  '{{camelCase name}}-list'
)

export { reducer, actions }
