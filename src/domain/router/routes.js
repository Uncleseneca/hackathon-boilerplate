import { pages } from './pages'
import { fetchListAction } from 'domain/student/actions/fetchListAction'

export default {
  [pages.HOME]: '/',
  [pages.SIGNIN]: { path: '/sign-in' },
  [pages.STUDENTS]: { path: '/student', thunk: fetchListAction() }
}
