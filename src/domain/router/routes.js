import { pages } from './pages'

export default {
  [pages.HOME]: '/',
  [pages.SIGNIN]: { path: '/sign-in' },
  [pages.STUDENTS]: { path: '/students', thunk: () => {} }
}
