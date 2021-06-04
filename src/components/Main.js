import React, {useState, useRef, useEffect, Component} from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination
  } from 'swiper/core';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import '../Styles/App.css'
  import Books from './Books'

SwiperCore.use([Pagination]);


export default function Main() {
    const [bestsellers, setBestsellers] = useState(null)
    const url = 'https://www.googleapis.com/books/v1/volumes?q=subject:fantasy'
    useEffect(() => {
        axios.get(url)
        .then(response => {
        setBestsellers(response.data)
    }) 
    }, [url])
    console.log(bestsellers)
    if(bestsellers !== null){
        return (
            <div className="box">
                <Books />
                <div>
                    <h3>Popular books</h3>
                        <Swiper slidesPerView={3} spaceBetween={30} pagination={{
                                        "clickable": true
                                        }} className="mySwiper">
                            {
                            bestsellers.items.map((bestseller, i) => {
                                 
                                if(bestsellers.volumeInfo === undefined){
                                    return(  
                                        <SwiperSlide style={{width: '300px'}}>
                                        <div className="carousel-content">
                                            <img src={bestseller.volumeInfo.imageLinks.thumbnail} alt="" />
                                            <p>{bestseller.volumeInfo.title}</p>
                                            <Link to={`single/${bestseller.id}`}>
                                                <button>info</button> 
                                            </Link>
                                        </div>
                                        </SwiperSlide>
                                    )
                                }
                                    
                                
                            })
                            }
                        </Swiper>
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

