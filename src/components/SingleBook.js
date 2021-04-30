import React, { useState, useEffect } from 'react'
import {
  useParams
} from "react-router-dom";
import request from 'superagent'
import Book from './Book'
import axios from 'axios'
export default function SingleBook() {
  let { id } = useParams();
  const url = 'https://www.googleapis.com/books/v1/volumes/' + id
  console.log(url)
  const [book, setBook] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setBook(response.data)
        console.log(response)

      }) 
  }, [url])
  console.log(book)

  if(book){
  return (
    <div>
      <h3>ID: {id}</h3>
      <img src={book.volumeInfo.imageLinks.thumbnail} />
      <h1>{book.volumeInfo.title}</h1>
      <p>author: {book.volumeInfo.authors}</p>
      <p>eBook: <a href="book.saleInfo.buyLink">{book.saleInfo.buyLink}</a></p>
      <p>pages: {book.volumeInfo.pageCount}</p>
      <p>publshed date: {book.volumeInfo.publishedDate}</p>
      <p>avarage rating: {book.volumeInfo.averageRating}</p>
      <p>{book.volumeInfo.description}</p>

    </div>
  )
  }
  return(
    <div>incorrect id</div>
  )
}
