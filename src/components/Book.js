// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// export default function Main() {
//     const [fictions, setFictions] = useState(null)
//     const [nonfictions, setNonfictions] = useState(null)

//     const fict = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction'
//     const nonfict = 'https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction'

//     useEffect(() => {
//         axios.get(fict)
//         .then(response => {
//         setFictions(response.data)
//     }) 
//     }, [fict])

//     // useEffect(() => {
//     //     axios.get(nonfict)
//     //     .then(response => {
//     //     setNonfictions(response.data)
//     //     }) 
//     // }, [nonfict])

//     console.log(fictions) 
//     if(fictions !== null && nonfictions !== null){
//         return (
//             <div>
//                 {/* <div className="fiction">
//                     <h3>fiction</h3>
//                     {
//                         fictions.items.map((fiction, i) => {
//                             return(
//                                 <div class="post" style={{width: '200px',
//                                     background: 'lavender',
//                                     border: 'solid purple',
//                                     padding: '10px',
//                                     float: 'left',
//                                     height: '350px'}}>
//                                     <img src={fiction.volumeInfo.imageLinks.thumbnail} alt="" />
//                                     <p>{fiction.volumeInfo.title}</p>
//                                     <Link to={`single/${fiction.id}`}>
//                                         <button>info</button> 
//                                     </Link>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//                 <br />
//                 <br /> */}

//                 {/* <div className="nonfiction">
//                     <h3>fiction</h3>
//                     {
//                         nonfictions.items.map((nonfiction, i) => {
//                             return(
//                                 <div class="post" style={{width: '200px',
//                                     background: 'lavender',
//                                     border: 'solid purple',
//                                     padding: '10px',
//                                     float: 'left',
//                                     height: '350px'}}>
//                                     <img src={nonfiction.volumeInfo.imageLinks.thumbnail} alt="" />
//                                     <p>{nonfiction.volumeInfo.title}</p>
//                                     <Link to={`single/${nonfiction.id}`}>
//                                         <button>info</button> 
//                                     </Link>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div> */}
//             </div>
//         )
//     }
//     else{
//         return(
//             <p>wait</p>
//         )
//     }
// }
