import React, { createContext, useState } from 'react'
import '../styles/App.css';
import '../styles/product.css';
import '../styles/Signup.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import ProductDetails from './ProductDetails';
import Signup from './Signup';
import Cart from './Cart';
import Items from './Items';
import Checkout from './Checkout';
import Error from './Error';



export const LoginContext = createContext()

function App() {
  const[cartarray, setCartarray]= useState([]);
  const[userlogin, setUserlogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}/> */}
          <Route path='/' element={<Navbar/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product/:id/cart' element={<Cart />}/>
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Signup/>}/>
          <Route path='/items' element={<Items />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Error />} />
          {/* <Route path='/'element={<LoginContext.Provider 
          value={{userlogin, setUserlogin}}><Navbar/></LoginContext.Provider>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;