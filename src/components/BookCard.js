import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import SingleBook from './SingleBook'
  import App from '../App'
  
const BookCard = (props) => {
    const BookId = "/single/" + props.id
    return (
        <div className="carousel-content" style={{width: '25%', float: 'left', marginTop: '40px'}}>
            <img src={props.image} alt=""/>
            <p>{props.title}</p>
            <Link to={BookId}>
                <button>info</button> 
            </Link>
           
        </div>
    )
}

export default BookCard;
