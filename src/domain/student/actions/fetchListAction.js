import { actions } from '../../reducers/list'
import { fetchListRequest } from '../api/fetchListRequest'
import qs from 'querystring'

export const fetchListAction = query => async (
  dispatch,
  getState,
  { extra }
) => {
  const stringifiedQuery = qs.stringify(query)
  const result = await fetchListRequest(extra())(query)
  return dispatch(actions.add(result))
}
