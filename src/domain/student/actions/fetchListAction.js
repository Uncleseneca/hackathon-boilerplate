import { actions } from '../reducers/list'
import { fetchListRequest } from '../api/fetchListRequest'
import qs from 'querystring'

export const fetchListAction = (query ) => async (
  dispatch,
  getState,
  { extra }
) => {


  const result = await fetchListRequest(extra())()
  // const filteredResult = query ? result
  return dispatch(actions.add(result))
}
