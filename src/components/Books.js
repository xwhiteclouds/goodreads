import Search from './Search'
import Booklist from './Booklist'
import React, { Component } from 'react'
import request from 'superagent'


export default class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchField: ''
    }
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get(`https://www.googleapis.com/books/v1/volumes`)
      .query({ q: this.state.searchField })
      .then((data) => {
        const cleanData = this.cleanData(data)
        console.log(data)
        this.setState({ books: cleanData})
      })
  }

  handleSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  handleSort = (e) => {
    // console.log(e.target.value)
    this.setState({ sort: e.target.value })
  }

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if(book.volumeInfo.hasOwnProperty['publishedDate'] === false){
        book.volumeInfo['publishedDate'] = '0000'
      }

      else if(book.volumeInfo.hasOwnProperty['imageLinks'] === false){
        book.volumeInfo['imageLinks'] = { tumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png"}
      } 
      return book;
    })

    return cleanedData;
  }

  render() {
    const sortedBooks = this.state.books.sort((a,b) => {
      if(this.state.sort === 'Newest'){
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
      }
      else if(this.state.sort === 'Oldest'){
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
      }
    })
    return (
      <div>
        <Search searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/> 
        <Booklist books={sortedBooks}/>
      </div>
    )
  }
}

