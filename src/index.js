import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import configureStore from 'store/configureStore'

import './index.css'

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
