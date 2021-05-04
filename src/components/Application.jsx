import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";

function Application() {
  const user = useContext(UserContext);

  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/auth">
            <SignIn />
          </Route>
          <Route path="/passwordReset">
            <PasswordReset />
          </Route>
        </Router>
      
  );
}

export default Application;
