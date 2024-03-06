import React from 'react';
import { GoStarFill } from "react-icons/go";
import '../App.css';

function TravelSafe() {

    return (
        <div className='container' id='travel'>
            <div className='travel'>
                <div className='effect-white'></div>
                <div className='travel-safe-contain'>
                    <h1 data-aos="fade-left">With TravelHub you can travel safely</h1>
                    <h2 data-aos="fade-left" data-aos-delay="100">We are a leading company and we provide the best travel and accommodation services around the world</h2>
                    <div className='qualification'>
                        <GoStarFill className="star-1" />
                        <GoStarFill className="star-2" />
                        <GoStarFill className="star-3" />
                        <GoStarFill className="star-4" />
                        <GoStarFill className="star-5" />
                    </div>
                </div>
                <div className='effect-white-2'></div>
            </div>
        </div>
    );
}

export default TravelSafe;