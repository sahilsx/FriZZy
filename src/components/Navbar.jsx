import React from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='Navbar'>
  <h1><Link to="/">  FriZzy!</Link></h1>  
      <ul>
      
        <li>   <Link to="/register">   Register </Link> </li>
        
        <li>   <Link to="/login">   Login </Link> </li>
 
        
      </ul>
    






    </div>
  )
}

export default Navbar