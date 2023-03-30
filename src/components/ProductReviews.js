import React from 'react'
import ProductReviewsCart from './ProductReviewsCart.js';
import "../styles/productReviews.css"

const productReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
       { productReviews.map((item,index)=>(
 
 <ProductReviewsCart price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />


       ))}
    </div>
  )
}

export default productReviews
