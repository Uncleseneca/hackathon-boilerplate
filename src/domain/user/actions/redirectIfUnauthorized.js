import { selectToken } from '../selectors/selectToken'
import { pages } from 'domain/router/pages'

export const refirectIfUnauthorized = () => (dispatch, getState) => {
  const unAuthorized = !selectToken(getState())
  if (unAuthorized) {
    dispatch({ type: pages.SIGNIN })
  }
}
