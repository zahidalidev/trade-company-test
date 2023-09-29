import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux'
import store from './redux/store'
// import 'antd/dist/antd.css'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
