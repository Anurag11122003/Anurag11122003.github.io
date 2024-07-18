import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
      <>
      <nav>
        <img className="photo" src="/menu.png" alt ="recipe"/>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      </>
    );
  
}

export default Navbar;