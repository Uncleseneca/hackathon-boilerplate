import { createItemRequest } from '../api/createItemRequest'

export const createItemAction = data => async (
  dispatch,
  getState,
  { extra }
) => {
  await createItemRequest(extra())(data)
}
