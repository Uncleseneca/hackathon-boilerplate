import 'antd/dist/antd.css'
import React from 'react'
import { connect, Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'
import configureStore from './domain/store/configureStore'
import * as components from './components'
import Layout from 'ui/layout'
import './index.css'
import { useThunk } from '@breadhead/thunk-utils'
import { refirectIfUnauthorized } from 'domain/user/actions/redirectIfUnauthorized'

// App component
const App = ({ page }) => {
  const dispatch = useThunk()
  dispatch(refirectIfUnauthorized())
  const Component = components[page]
  if (!Component) throw Error('check components map')
  return (
    <Layout>
      <Component />
    </Layout>
  )
}
const ConnectedApp = connect(({ page }) => ({ page }))(App)

// Redux setup
const { store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <StoreContext.Provider value={store}>
      <ConnectedApp />
    </StoreContext.Provider>
  </Provider>,
  document.getElementById('root')
)
