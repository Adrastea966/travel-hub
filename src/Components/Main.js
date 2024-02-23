import React from 'react';
import { IoLocation } from 'react-icons/io5';
import { FaRegCalendar } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import '../App.css';

function Main() {
  return (
    <div className='container'>
      <div className='main'>
        <div className='container-data-entry-template'>
            <h1>Choose your next destination</h1>
            <div className='data-entry-template'>
                <div className='destiny-data-entry'><IoLocation />Destiny</div>
                <div className='calendar-data-entry'><FaRegCalendar />mon, 19 feb - thue 20feb</div>
                <div className='passengers-data-entry'><FaUser />2</div>
                <a className='search' href='#'><IoSearchSharp /></a>
            </div>
            <IoIosArrowDown />
        </div>
        <div className='container-most-visited-destinations'>
            <h3>Choose your next destination</h3>
            {/*Carrousel*/}
        </div>
      </div>
    </div>
  );
}

export default Main;