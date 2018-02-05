import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  createStore, compose, applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import App from './containers/App'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// eslint-disable-next-line no-underscore-dangle, no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app') // eslint-disable-line no-undef
)
