import { pages } from './pages'

export default (state = pages.HOME, action = {}) => pages[action.type] || state
