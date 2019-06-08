import page from '../router/pageReducer'

import { combineReducers } from 'redux'
import { reducer as userReducer } from 'domain/user/reducers'

export const createRootReducer = locationReducer =>
  combineReducers({
    page,
    location: locationReducer,
    user: userReducer
  })
