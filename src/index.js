import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import fruit from './store/store'
import { Provider } from 'mobx-react'
import './index.css'

ReactDOM.render(
  <Provider fruit={fruit}>
    <App />
  </Provider>,
  document.getElementById('root')
)
