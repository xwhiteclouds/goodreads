import React, { useState, useEffect, useContext } from 'react'
import {
  useParams
} from "react-router-dom";
import request from 'superagent'
import Book from './Book'
import axios from 'axios'
import { UserContext } from "../providers/UserProvider";
import {firebase,  firestore} from '../firebase'

export default function SingleBook() {
  const [reviews, setReviews] = useState([]);

  let { id } = useParams();
  const url = 'https://www.googleapis.com/books/v1/volumes/' + id
  const [book, setBook] = useState(null)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setBook(response.data)
      }) 
  }, [url])

  useEffect(() => {
    getReviews();
  }, [])

  const getReviews = async () => {
    const data = await firestore.collection("reviews").get();
    setReviews(data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })))
  }

  const addReview = async () => {
    const review = document.getElementById("add_review").value;
    const name = userObj.displayName;
    const book = id
    await firestore.collection("reviews").add({
      name: name,
      post: review,
      book: book
    }).then(() => {
      document.getElementById("add_review").value = "";
      getReviews()
    })
  }

  var user = localStorage.getItem('user');
  if(book){
    console.log(userObj)
    var userObj = localStorage.getItem('user')

    if(user !== 'undefined'){
      var userObj = JSON.parse(localStorage.getItem('user'))

      return (
        <div>
          <h3>ID: {id}</h3>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
          <h1>{book.volumeInfo.title}</h1>
          <p>author: {book.volumeInfo.authors}</p>
          <p>pages: {book.volumeInfo.pageCount}</p>
          <p>publshed date: {book.volumeInfo.publishedDate}</p>
          <p>avarage rating: {book.volumeInfo.averageRating}</p>
          <p>{book.volumeInfo.description}</p>
          
          <textarea placeholder="review" id="add_review"/>
          <button onClick={() => addReview()}>submit</button>
          <br/>
          <br />
          
          {
          reviews.map((review, index) => {
           
              {if(review.book === id){
                return(
                <div class="post">
                  <h3>{review.name}</h3>
                  <p>{review.post}</p>
                </div>
                )
              }}
          })
          }
        </div>  
      )
    }
    else{
      return (
        <div>
          <h3>ID: {id}</h3>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
          <h1>{book.volumeInfo.title}</h1>
          <p>author: {book.volumeInfo.authors}</p>
          <p>pages: {book.volumeInfo.pageCount}</p>
          <p>publshed date: {book.volumeInfo.publishedDate}</p>
          <p>avarage rating: {book.volumeInfo.averageRating}</p>
          <p>{book.volumeInfo.description}</p>
          
           <br/>
          <br />
          
          {
          reviews.map((review, index) => {
           
              {if(review.book === id){
                return(
                <div class="post">
                  <h3>{review.name}</h3>
                  <p>{review.post}</p>
                </div>
                )
              }}
          })
          }
        </div>  
      )
    }


  }
  return(
    <div>incorrect id</div>
  )
}
