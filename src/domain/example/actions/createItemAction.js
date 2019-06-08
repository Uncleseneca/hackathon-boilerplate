import { createItemRequest } from '../api/createItemRequest'
import { pages } from 'domain/router/pages'

export const createItemAction = ({ _id, ...data }) => async (
  dispatch,
  getState,
  { extra }
) => {
  await createItemRequest(extra())(data)
  dispatch({ type: pages.TASKS })
}
