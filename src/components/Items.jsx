import React from 'react'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import '../styles/Items.css'
// import Checkout from './src/components/Checkout'

const Items = () => {
    const [address, setaddress] = useState("");
    const handleChange = (e) => {
        setaddress(e.target.value)

    }
    const submit = (e) =>{
        e.preventDefault();
    }

  return (
    <>
    <div className='mainform'>
      <div >
      <form onSubmit={submit}>
        <ul className='mainform2'>
            <li><label>Enter Name :</label></li>
            <li><input type="text" value = "name" /> </li>
            <li><label>Phone no</label></li>
            <li><input type= "number" value = "number"/></li>
            <li><label>Address :</label></li>
            <li><textarea placeholder='Enter address' value = {address} onChange={handleChange} ></textarea></li>
            <li><label>Payment Method</label></li>
            <li><select value = "payment">
                <option>Google Pay</option>
                <option>PhonePe</option>
                <option>Cash on Delivery</option>
            </select></li>
            <li><h3>Order Total : 2000Rs</h3></li>
            <li>
                <NavLink to="/checkout" className="cart">
                <div><button className='placebtn'>Place order</button></div>
                </NavLink>
            </li>
        </ul>   
      </form>
      </div>
      </div>
    </>
  )
}

export default Items