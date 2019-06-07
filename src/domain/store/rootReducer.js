import page from '../router/pageReducer'

import { combineReducers } from 'redux'
import { taskReducer } from 'domain/task/reducers'
import { taskListReducer } from 'domain/task-list/reducers'
import { answerReducer } from 'domain/answer/reducers'

export const createRootReducer = locationReducer =>
  combineReducers({
    page,
    location: locationReducer,
    task: taskReducer,
    taskList: taskListReducer,
    answer: answerReducer
  })
