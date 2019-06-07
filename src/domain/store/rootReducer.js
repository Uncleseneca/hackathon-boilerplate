import page from '../router/pageReducer'

import { combineReducers } from 'redux'
import { taskReducer } from 'domain/task/reducers'

export const createRootReducer = locationReducer =>
  combineReducers({
    page,
    location: locationReducer,
    task: taskReducer
  })
