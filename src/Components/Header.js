import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { MdHelp } from 'react-icons/md';
import { PiAirplaneTiltFill } from 'react-icons/pi';
import UsaFlag from '../img/flag-usa.png';
import '../App.css';

function Header() {
  return (
    <div className='header' id='header'>
      <div className='space'></div>
      <nav className='navbar'>
        <ul className='navbar-container-links'>

          <li className='menu-item blog-link'>
            <a href='#'>Blog <IoIosArrowDown /></a>
            <ul className='sub-menu'>
              <li><a href='#'>Landscapes</a></li>
              <li><a href='#'>Activities</a></li>
              <li><a href='#'>Gastronomy</a></li>
              <li><a href='#'>Cultural</a></li>
              <li><a href='#'>Historical</a></li>
              <li><a href='#'>Economic</a></li>
            </ul>
          </li>
          <li className='menu-item help-link'>Assistence <MdHelp /></li>

        </ul>
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