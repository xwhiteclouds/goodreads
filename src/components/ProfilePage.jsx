import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../providers/UserProvider";
import {firebase,  firestore} from '../firebase'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {auth} from "../firebase";




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


const ProfilePage = () => {
  const user = useContext(UserContext);
  const [readBooks, setReadBooks] = useState([]);
  console.log(readBooks)
  const {photoURL, displayName, email} = user;
  useEffect(() => {
    getReadBooks();
  }, [])
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getReadBooks = async () => {
    const data = await firestore.collection("reading").where('user', '==', user.uid).get();
    // console.log(data)
    setReadBooks(data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })))
  }

  return (
    <div className = "mx-auto">
      <div className="flex">
        <div className = "md:pl-4">
          <img src={photoURL} />
        <h2 className = "text-2xl font-semibold">{displayName}</h2>
      </div>
      </div>
      <button className="signOut" onClick = {() => {auth.signOut()}}>Sign out</button>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Read" />
          <Tab label="Want to read" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {
            readBooks.map((readBook, index) => {
              {if(readBook.status === 'read'){
                return(
                  <div className="carousel-content">
                    <img src={readBook.thumb} alt="" />
                    <p>{readBook.bookName}</p>
                    <Link to={`single/${readBook.book}`}>
                      <button>info</button> 
                    </Link>
                  </div>
                )
              }}
          })
            
          }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
            readBooks.map((readBook, index) => {
            
                {if(readBook.status === 'want to read'){
                  return(
                    <div class="carousel-content" >
                      <img src={readBook.thumb} alt="" />
                      <p>{readBook.bookName}</p>
                      <Link to={`single/${readBook.book}`}>
                       <button>info</button> 
                      </Link>
                    </div>
                  )
                }}
            })
            }
      </TabPanel>

    </div>
  ) 
};

export default ProfilePage;

