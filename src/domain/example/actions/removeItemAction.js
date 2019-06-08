import { removeItemRequest } from '../api/removeItemRequest'
import { pages } from 'domain/router/pages'
import { selectItemId } from 'domain/router/selectItemId'

export const removeItemAction = () => async (dispatch, getState, { extra }) => {
  const state = getState()
  const id = selectItemId(state)
  await removeItemRequest(extra())(id)
  dispatch({ type: pages.TASKS })
}
