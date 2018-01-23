import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  createStore, compose, applyMiddleware, combineReducers
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers'
import App from 'containers/App'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  combineReducers({ rootReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

// sagaMiddleware.run(saga)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
)
