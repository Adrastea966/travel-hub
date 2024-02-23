import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdHelp } from "react-icons/md";
import { PiAirplaneTiltFill } from "react-icons/pi";
import UsaFlag from '../img/flag-usa.png';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <nav className='navbar'>
        <div className='navbar-container-links'>
          <div className='blog-link'>Blog <IoIosArrowDown /></div>
          <div className='help-link'>Assistence <MdHelp /></div>
        </div>
        <div className='navbar-container-logo'>
          <div className='logo-link'>TravelHub <PiAirplaneTiltFill /></div>
        </div>
        <div className='navbar-container-buttons'>
          <button className='btn-1'><img src={UsaFlag}></img>USD</button>
          <button className='btn-2'>Log in</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;