import { actions as dataActions } from '../reducer/data'
import { resetCookie } from '../helpers/resetCookie'

const { resetToken } = dataActions

export const signOutAction = () => async dispatch => {
  resetCookie()

  dispatch(resetToken())
}
