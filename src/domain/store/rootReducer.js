import page from '../router/pageReducer'

import { combineReducers } from 'redux'

export const createRootReducer = locationReducer =>
  combineReducers({
    page,
    location: locationReducer,
  })
