import React from 'react'
import '../styles/ProductReviewsCard.css'

const ProductReviewsCart = ({image,index,review,name,price}) => {
  return (
   <div className='ProductReviewsCard'>
  <img src={image} alt={index}  />
  <h5>{review}</h5>
  <span>{name}</span>
  <p>{price}</p>
   </div>
  )
}

export default ProductReviewsCart