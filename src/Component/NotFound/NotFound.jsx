import React from 'react'
import NotFoundImg from '../Images/404.jpg' 

export default function NotFound() {
  return (
    <>
     <h1>Not Found
        this page doesn't exist
        </h1> 

        <img src={NotFoundImg} alt="" />
    </>
  )
}
