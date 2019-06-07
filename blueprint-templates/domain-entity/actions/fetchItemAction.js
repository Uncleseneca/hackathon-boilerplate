import { actions } from '../reducers/item'
import { fetchItemRequest } from '../api/fetchItemRequest'

export const fetchItemAction = id => async (dispatch, getState, { extra }) => {

  const result = await fetchItemRequest(extra())(id)
  return dispatch(actions.add(result))
}
