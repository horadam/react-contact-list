import React from 'react'
import '../styles/base.css'
import {BrowserRouter as Router,  Route} from 'react-router-dom'

import ContactList from './ContactList'
import Contact from './Contact'


const App = (props) => (
  <Router>
    <div id="container">
      <Route exact path="/" component={ContactList} />
      <Route path="/Contact/:id" component={Contact} />
    </div>
  </Router>
)

export default App