import { signIn as signInRequest } from '../api/signInRequest'
import { setCookie } from '../helpers/setCookie'
import { actions as userActions } from '../reducers'
import { pages } from 'domain/router/pages'

export const signInAction = (login, password) => async (
  dispatch,
  getState,
  { extra }
) => {
  // const { token } = await signInRequest(extra())(login, password)
  const token = 'test'
  dispatch(userActions.setToken(token))
  setCookie(token)

  dispatch({ type: pages.HOME })
}
