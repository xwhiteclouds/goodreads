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
        <div className="book-card" style={{
            width: '90%',
            border: 'solid grey 1px',
            margin: 'auto',
            marginBottom: '20px',
            background: 'mintcream',
            padding: '20px',
            height: 'auto',
            minHeight: '180px'
        }}>
            <img src={props.image} alt="" style={{width: '110px',float: 'left', marginRight: '10px'}}/>
            <div className="desc">
                <h3>{props.title}</h3>
                <p style={{fontSize: '13px', color: 'gray'}}>{props.author}</p>
                <p style={{fontSize: '13px', color: 'gray'}}>{props.published}</p>
                <Link to={BookId}>
                    <button>info</button> 
                </Link>
            </div>
        </div>
    )
}

export default BookCard;
