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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Application() {
  const user = useContext(UserContext);
  var locuser = localStorage.getItem('user');

  const [value, setValue] = React.useState(0);
  console.log(user)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
        user ?
        <ProfilePage />
      :
        <Router>
          <Route path="/passwordReset">
            <PasswordReset />
          </Route>
          <Route path='/auth'>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Sign In" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <SignIn />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SignUp />
              </TabPanel>
          </Route>

        </Router>
      
  );
}

export default Application;
