import React, {useContext} from 'react'
import BookCard from './BookCard'
import {UserContext} from '../providers/UserProvider'

const Booklist = (props) => {

    return (

        <div className="book-list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                        id={book.id}
                    />
                })
            }
        </div>
    )

}

export default Booklist
