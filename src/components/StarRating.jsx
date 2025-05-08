import React from 'react'
import { FaStar } from "react-icons/fa6";

const StarRating = ({rating}) => {
    
   const width = ((rating / 10) * 100) + 0.45 ;


  return (
   <div className='star-rating' >
          

      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
      <FaStar className='star' />
     

     <div style={{
        width: `${width}%`,
        whiteSpace: "nowrap",
        overflow: "hidden",
        position:"absolute",
        top:0,
      //   backgroundColor:"red"
     }} >

        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />
        <FaStar className='upStar' />

     </div>
          
  
   </div>
  )
}

export default StarRating