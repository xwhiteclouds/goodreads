import React from 'react'
import error from '../imgs/404.png'

export default function PageNotFound() {
    return (
        <div>
            <h1>404</h1>
            <img src={error}/>
        </div>
    )
}
