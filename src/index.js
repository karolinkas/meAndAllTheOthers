import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Login} from './login.js'
import {Join} from './join.js'
import {MiddleBar} from './middlebar.js'

import './index.css'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={MiddleBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/joinus" component={Join} />
    </div>
  </Router>,
  document.getElementById('root')
)

export default Login
