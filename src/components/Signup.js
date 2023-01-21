import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
const Navigate = useNavigate();
const [login, setLogin] = useState({

name: "",

email: "",

password: "",

});

const signUpForm = (e) => {
 e.preventDefault();
 
let loginData = localStorage.getItem("loginDetails");

if(loginData == null){

loginData = [];

loginData.push(login);

localStorage.setItem("loginDetails",JSON.stringify(loginData));

}else{

let data = JSON.parse(loginData);

data.push(login);
const {name,email,password} = data;
if (name==="" || email==="" || password==="")
{
  alert("All fields are required");
}
else{
  localStorage.setItem("loginDetails",JSON.stringify(data));
}

}
Navigate("/");

};

return (
 <div className="main"> 
<div className="containerlogin">
  <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" className="img" />
  <h3 className="h3">Sign Up to view your profile</h3> 


<input className="inputlogin" placeholder="Name"

type="text"

name="name"

value={login.name}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>

<br />



<input className="inputlogin" placeholder="Email"

type="email"

name="email"

value={login.email}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>

<br />


<input className="inputlogin" placeholder="Password"

type="password"

name="password"

value={login.password}

onChange={(e) => {

setLogin({ ...login, [e.target.name]: e.target.value });

}}

/>

<br />

<button className="btnlogin" onClick={signUpForm}>Signup</button>

</div>

</div>


);

};

export default SignupForm;