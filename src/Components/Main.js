import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IoLocation } from 'react-icons/io5';
import { FaRegCalendar } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import '@splidejs/splide/dist/css/splide.min.css';
import '../App.css';

function Main() {

  return (
    <div className='container'>
      <div className='main'>

        <div className='main-principal-carrousel'>

          <div className='container-data-entry-template'>
            <h1>Choose your next destination</h1>
            <div className='data-entry-template'>
              <div className='destiny-data-entry'><IoLocation />Destiny</div>
              <div className='calendar-data-entry'><FaRegCalendar />mon, 19 feb - thue 20feb</div>
              <div className='passengers-data-entry'><FaUser />2</div>
              <div className='search'><a href='#'><IoSearchSharp /></a></div>
            </div>
            <div className='icon-arrow-down'>
              <IoIosArrowDown />
            </div>
          </div>

          <Splide>
            <SplideSlide>
              <img className='carrousel-main-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Australia_ib1ecj" alt="Slide 1" />
              <div className='degrade'></div>
            </SplideSlide>
            <SplideSlide>
              <img className='carrousel-main-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Australia_ib1ecj" alt="Slide 2" />
              <div className='degrade'></div>
            </SplideSlide>
            <SplideSlide>
              <img className='carrousel-main-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Australia_ib1ecj" alt="Slide 3" />
              <div className='degrade'></div>
            </SplideSlide>
          </Splide>

          <div className='container-most-visited-destinations'>
            <h2>Most visited destinations</h2>

            <div className='containter-carrousel-most-visited-destinations'>

              <div className='carrousel-card'>
                <img className='carrousel-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Brazil_dhfmcj" alt="Imagen 1" />
                <p><strong>Brazil</strong> Río de Janeiro</p>
              </div>
              <div className='carrousel-card'>
                <img className='carrousel-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Mexico_iox1bu" alt="Imagen 2" />
                <p><strong>Mexico </strong> Cancun</p>
              </div>
              <div className='carrousel-card'>
                <img className='carrousel-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Estados_Unidos_gebxvf" alt="Imagen 3" />
                <p><strong>USA</strong> New York</p>
              </div>
              <div className='carrousel-card'>
                <img className='carrousel-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Roma_kzz5w5" alt="Imagen 4" />
                <p><strong>Italy</strong> Rome</p>
              </div>
              <div className='carrousel-card'>
                <img className='carrousel-img' src="https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/Buenos_aires_lo23bd" alt="Imagen 5" />
                <p><strong>Argentina</strong> Bs As</p>
              </div>
        
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;