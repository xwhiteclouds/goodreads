import React from 'react'
import Books from './components/Books'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleBook from './components/SingleBook';

const App = (props) => {
  
  return (
    <Router>
      <Link to='/'><button>books</button></Link> 
      <Switch>
        <Route path='/' exact>
          <Books/>
        </Route>
        <Route path='/single/:id' exact >
          <SingleBook /> 
        </Route>
        
      </Switch>
    </Router>
  )
}

export default App;
