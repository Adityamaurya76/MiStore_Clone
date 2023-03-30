import React from 'react'
import Offer from "./Offer.js"
import "../styles/offer.css"


const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
      {offer.map((item,index)=>(
     <Offer key={item.image} imdex={index} src={item.image} link={item.url} />
      ))


      }  


    </div>
  )
}

export default Offers