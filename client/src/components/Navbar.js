import React from 'react';
import logo2 from '../img/logo2.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="header">
      <div className="header-content">
        <NavLink to='/' className="header-content-logo">
          <span>The</span>
          <img src={logo2} alt="rx-life-logo"/>
          <span>Life</span>
        </NavLink>
        <div className="header-content-links">
          <HashLink to='/#challenge-section'>The Challenge</HashLink>
          <NavLink to='/points'>The Points</NavLink>
          <a href="/points#how-it-works-section">How to Play</a>
          <a href="#about">About</a>
          <a href="#account">Account</a>
        </div>
        <div className="header-content-auth">
          <NavLink to='/signup'>
            <FontAwesomeIcon icon={faUserCircle}/>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;