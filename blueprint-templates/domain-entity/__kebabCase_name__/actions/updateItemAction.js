import { updateItemRequest } from '../api/updateItemRequest'

export const updateItemAction = (id, data) => async (
  dispatch,
  getState,
  { extra }
) => {
  await updateItemRequest(extra())(id, data)
}
