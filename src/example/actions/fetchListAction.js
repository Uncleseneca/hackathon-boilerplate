import { actions } from '../reducers/list'
import { fetchListRequest } from '../api/fetchListRequest'

export const fetchListAction = () => async (dispatch, getState, { extra }) => {
  const result = await fetchListRequest(extra())()
  return dispatch(actions.add(result))
}
