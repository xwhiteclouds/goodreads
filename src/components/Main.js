import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Main() {
    const [bestsellers, setBestsellers] = useState(null)
    const url = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction'
    useEffect(() => {
        axios.get(url)
        .then(response => {
        setBestsellers(response.data)
    }) 
    }, [url])
    console.log(bestsellers)
    if(bestsellers !== null){
        return (
            <div>
                <div className="nonfiction">
                     <h3>bestsellers</h3>
                     {
                         bestsellers.items.map((bestseller, i) => {
                             return(
                                 <div class="post" style={{width: '200px',
                                     background: 'lavender',
                                     border: 'solid purple',
                                     padding: '10px',
                                     float: 'left',
                                     height: '300px'}}>
                                     <img src={bestseller.volumeInfo.imageLinks.thumbnail} style={{width: '100px'}} alt="" />
                                     <p>{bestseller.volumeInfo.title}</p>
                                     <Link to={`single/${bestseller.id}`}>
                                         <button>info</button> 
                                     </Link>
                                 </div>
                             )
                         })
                     }
                </div>

            </div>
        )
    }
    else{
        return(
            <p>wait</p>
        )
    }
    
    
   
}
