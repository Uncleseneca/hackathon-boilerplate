import { createClearRedux } from 'redux-clear'

const { reducer, actions } = createClearRedux(
  {
    add: () => item => item,
    update: state => update => ({ ...state, ...update }),
    reset: () => () => ({})
  },
  {},
  'task-item'
)

export { reducer, actions }
