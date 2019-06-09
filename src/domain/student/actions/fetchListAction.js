import { actions } from '../reducers/list'
import { fetchListRequest } from '../api/fetchListRequest'
import { filterStudents } from '../helpers/filterStudents'

export const fetchListAction = query => async (
  dispatch,
  getState,
  { extra }
) => {
  const students = await fetchListRequest(extra())()
  const filteredResult = query ? filterStudents(students, query) : students
  return dispatch(actions.add(filteredResult))
}
