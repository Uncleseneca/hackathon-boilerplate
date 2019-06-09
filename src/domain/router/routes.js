import { pages } from './pages'
import { fetchListAction } from 'domain/student/actions/fetchListAction'
import { selectQuery } from 'domain/student/selectors/selectQuery'

export default {
  [pages.HOME]: '/',
  [pages.SIGNIN]: { path: '/sign-in' },
  [pages.STUDENTS]: { path: '/student', thunk: fetchListAction() },
  [pages.STUDENTS_SEARCH]: {
    path: '/student/search/:query?',
    thunk: async (dispatch, getState) => {
      fetchListAction(selectQuery(getState()))
    }
  }
}
