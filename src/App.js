import React from 'react'
import Books from './components/Books'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Link to='/'><button>books</button></Link> 
      <Link to='/auth'><button>sign in</button></Link> 
      <Switch>
        <Route path='/' exact>
          <Books/>
        </Route>
      </Switch>
    </Router>
  )
}
