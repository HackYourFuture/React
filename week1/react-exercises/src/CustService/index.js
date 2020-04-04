import React from 'react'
import ReactDOM from 'react-dom'
import Guarantee from './grantee'
import App from './App'

const title = 'Guarantee'
ReactDOM.render(
  <App Guarantee={Guarantee} title={title} />,
  document.getElementById('root')
)
