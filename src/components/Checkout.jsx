import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Check.css'

const Checkout = () => {
  return (
    <>
      {/* <NavLink to="/" className="cart">
        <div> <button> Home </button> </div>
      </NavLink> */}
      <div  className='msgcontainer'>
      <h1 className='yourh1'>Your order has been placed...!!!</h1>
      <h1>Thank you for shopping with us... !!!</h1>
      <img src="https://cdn.vectorstock.com/i/preview-1x/97/06/place-your-curbside-pickup-order-online-abstract-vector-38339706.webp" alt="" className='orderimg' />
      </div>
      <NavLink to="/" className="cart">
        <div> <button className='btnhome'> Back to Home </button> </div>
      </NavLink>
    </>
  )
}

export default Checkout