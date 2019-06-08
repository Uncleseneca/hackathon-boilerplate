import { removeItemRequest } from '../api/removeItemRequest'

export const removeItemAction = id => async (dispatch, getState, { extra }) => {
  await removeItemRequest(extra())(id)
}
