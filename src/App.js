import React, { useContext } from "react";
import Books from './components/Books'
import Main from './components/Main'
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
import PageNotFound from './components/PageNotFound'
import './Styles/App.css'; 
import MainImg from './imgs/main.png'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const App = (props) => {
  var user = localStorage.getItem('user');


  return (
    <div className="main">
      <Router >
        <nav>
          <Link to='/' onCLick={() => window.location.reload(false)}><h1>GR</h1></Link>
          <Link to='/'><button>main</button></Link>
          {user !== null ? <Link to='/auth'><button>sign in</button></Link> 
          : <Link to='/auth'><button>profile</button></Link>}
          
        </nav>

        <div className="content">
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
            <Route path='/single/:id' exact >
              <SingleBook /> 
            </Route>
            <Route path='/auth'>
              <UserProvider>
                <Application />
              </UserProvider>
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;