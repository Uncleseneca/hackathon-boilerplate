import { removeItemRequest } from '../api/removeItemRequest'
import { pages } from 'domain/router/pages'

export const removeItemAction = id => async (dispatch, getState, { extra }) => {
  await removeItemRequest(extra())(id)
}
