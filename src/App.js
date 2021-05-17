import React, { useContext } from "react";
import Books from './components/Books'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleBook from './components/SingleBook';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./providers/UserProvider";


const App = (props) => {
  var user = localStorage.getItem('user');

  return (
    <Router>
      <Link to='/'><button>books</button></Link> 
      {user ? <Link to='/auth'><button>profile</button></Link> 
      : <Link to='/auth'><button>sign in</button></Link>}
  
      <Switch>
        <Route path='/' exact>
          <Books/>
        </Route>
        <Route path='/single/:id' exact >
          <SingleBook /> 
        </Route>
        <Route path='/auth'>
          <UserProvider>
            <Application />
          </UserProvider>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;