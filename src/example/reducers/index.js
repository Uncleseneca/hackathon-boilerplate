import { combineReducers } from 'redux'

import { reducer as listReducer } from './list'
import { reducer as itemReducer } from './item'

const reducer = combineReducers({
  list: listReducer,
  item: itemReducer
})

export { reducer as taskReducer }
