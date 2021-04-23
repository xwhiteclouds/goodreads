import React from 'react'

const BookCard = (props) => {
    return (
        <div className="book-card" style={{
            width: '200px',
            float: 'left',
            border: 'solid grey 1px',
            margin: '20px',
            background: 'mintcream',
            padding: '20px',
            height: '420px'
        }}>
            <img src={props.image} alt="" style={{width: '100%', height: '240px'}}/>
            <div className="desc">
                <p>{props.title}</p>
                <p>{props.author}</p>
                <p>{props.published}</p>
            </div>
        </div>
    )
}

export default BookCard;
