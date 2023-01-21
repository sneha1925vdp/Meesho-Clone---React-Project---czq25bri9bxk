import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Cart.css'
// import './App.css'

const Cart = () => {
  
  const getdata = JSON.parse(localStorage.getItem('cartArray'));
  const[count, setcount] = useState(1);
  let total = 0;

  console.log(getdata)

  if(getdata === null){
    return(
      <>
      <h1>Cart is Empty</h1>

      <NavLink to="/">
          <div><button>Continue Shopping</button></div>
      </NavLink>
      </>
    )
  }

  else{
    return (
      <>
          {/* <Items /> */}
          <div className='cartparent'>
          
              {getdata.map((i)=>{
                
                return(
                  <>
                  <div className='cartchilditem'>
                  <h3><img src= {i.image} /></h3>
                  <h3>{i.category}</h3>
                  <h3>{i.title}</h3>
                  <div className='i.price'><h3 >{i.price}</h3></div>
                  <h3>Qty: 1</h3>
                  <div className='total'>
                    {total = total + i.price}
                  </div>
                  </div>
                  </>
                )
                
              })}
          </div>
              <div >
                <div className='maindetail'>
                <h2>Price Details</h2>
                Order Total = {total.toFixed(2)}
                </div>
              </div>
          <NavLink to="/items" className="cart">
          <div><button className='btncheck'><h3>Checkout</h3></button></div>
          
        </NavLink>
      </>
    )
  }
  }
  

export default Cart