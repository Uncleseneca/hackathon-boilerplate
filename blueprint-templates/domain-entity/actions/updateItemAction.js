import { updateItemRequest } from '../api/updateItemRequest'
import { pages } from 'domain/router/pages'

export const updateItemAction = (id, data) => async (
  dispatch,
  getState,
  { extra }
) => {
  await updateItemRequest(extra())(id, data)
}
