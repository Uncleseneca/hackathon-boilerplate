import { createClearRedux } from 'redux-clear'

const { reducer, actions } = createClearRedux(
  {
    add: () => item => item,
    update: state => update => ({ ...state, ...update }),
    reset: () => () => ({})
  },
  {},
  'student-item'
)

export { reducer, actions }
