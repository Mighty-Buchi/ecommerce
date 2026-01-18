import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import cart from '../../assets/cart.png'
import icon from '../../assets/icon.jpg'

const Header = () => {
const [menu,setMenu] =useState("shop");

  return (
    <div className="header">
      <div className="logo">
        <img src={icon} alt="" />
        <p>DEVV_EL</p>
      </div>

      <div className="nav-links">
       <Link to='/'onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr />:null}</Link>
       <Link to='/men' onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr />:null}</Link>
       <Link to='/women' onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr />:null}</Link>
       <Link to='/kids' onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr />:null}</Link>
      </div>

      <div className="log">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="cart-count">0</div>
      </div>
    </div>
  );
};

export default Header;
