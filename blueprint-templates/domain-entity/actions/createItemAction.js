import { createItemRequest } from '../api/createItemRequest'
import { pages } from 'domain/router/pages'

export const createItemAction = data => async (
  dispatch,
  getState,
  { extra }
) => {
  await createItemRequest(extra())(data)
}
