import { createClearRedux } from 'redux-clear'

const { reducer, actions } = createClearRedux(
  {
    setToken: state => token => {
      return { ...state, token }
    }
  },
  {},
  'user'
)

export { reducer, actions }
