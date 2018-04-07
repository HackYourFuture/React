import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './Board'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Board count={50}/>, document.getElementById('root'))
registerServiceWorker()
