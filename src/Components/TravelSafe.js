import React from 'react';
import { GoStarFill } from "react-icons/go";
import '../App.css';

function TravelSafe() {
    return (
        <div className='container'>
            <div className='travel'>
                <div className='travel-safe-img'>
                    <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/avion_xjveer'></img>
                </div>
                <div className='travel-safe-contain'>
                    <h1>With TravelHub you can travel safely</h1>
                    <h2>We are a leading company and we provida the best travel and accommodation services around the world</h2>
                    <div className='qualification'> 
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelSafe;