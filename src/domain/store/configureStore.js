import { applyMiddleware, compose, createStore } from 'redux'
import { connectRoutes } from 'redux-first-router'
import thunk from 'redux-thunk'

import routes from '../router/routes'
import { createApi } from 'domain/api/createApi'
import { createRootReducer } from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default preloadedState => {
  const { reducer, middleware, enhancer } = connectRoutes(routes, {
    extra: createApi
  })

  const middlewares = applyMiddleware(
    middleware,
    thunk.withExtraArgument({ extra: createApi })
  )
  const enhancers = composeEnhancers(enhancer, middlewares)

  const store = createStore(
    createRootReducer(reducer),
    preloadedState,
    enhancers
  )

  return { store }
}
