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


import {auth} from "../firebase";
const ProfilePage = () => {
  const user = useContext(UserContext);
  const [readBooks, setReadBooks] = useState([]);
  console.log(readBooks)
  const {photoURL, displayName, email} = user;
  useEffect(() => {
    getReadBooks();
  }, [])


  const getReadBooks = async () => {
    const data = await firestore.collection("reading").where('user', '==', user.uid).get();
    // console.log(data)
    setReadBooks(data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })))
  }
  
  



  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
        <div className = "md:pl-4">
        <h2 className = "text-2xl font-semibold">{displayName}</h2>
      </div>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
      <div className="reading-list">
        <div className="read" style={{width: '50%', float: 'left'}}>
        <h3>read</h3>
          {
            readBooks.map((readBook, index) => {
              {if(readBook.status === 'read'){
                return(
                  <div class="post" style={{width: '200px',
                    background: 'lavender',
                    border: 'solid purple',
                    padding: '10px'}}>
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
        </div>
        <div className="want-to-read" style={{width: '50%', float: 'left'}}>
            <h2>want to read</h2>
            {
            readBooks.map((readBook, index) => {
            
                {if(readBook.status === 'want to read'){
                  return(
                    <div class="post" style={{width: '200px',
                    background: 'lavender',
                    border: 'solid purple',
                    padding: '10px'}}>
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
          
        </div>
      </div>
    </div>
  ) 
};

export default ProfilePage;

