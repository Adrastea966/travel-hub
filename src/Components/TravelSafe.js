import React, { useEffect, useState } from 'react';
import { GoStarFill } from "react-icons/go";
import '../App.css';

function TravelSafe() {
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const effectWhite = document.querySelector('.effect-white');
        const effectWhite2 = document.querySelector('.effect-white-2');

        function changeHeightOnScroll() {
            if (!hasAnimated && window.scrollY >= document.getElementById("travel").offsetTop && window.scrollY < document.getElementById("travel").offsetTop + document.getElementById("travel").offsetHeight) {
                effectWhite.style.height = '10vh';
                effectWhite2.style.height = '10vh';
                setHasAnimated(true);
            }
        }

        window.addEventListener('scroll', changeHeightOnScroll);

        return () => {
            window.removeEventListener('scroll', changeHeightOnScroll);
        };
    }, [hasAnimated]);

    return (
        <div className='container' id='travel'>
            <div className='travel'>
                <div className='effect-white'></div>
                <div className='travel-safe-contain'>
                    <h1 data-aos="fade-left" data-aos-delay="600">With TravelHub you can travel safely</h1>
                    <h2 data-aos="fade-left" data-aos-delay="650">We are a leading company and we provide the best travel and accommodation services around the world</h2>
                    <div className='qualification'> 
                        <GoStarFill/>
                        <GoStarFill/>
                        <GoStarFill/>
                        <GoStarFill/>
                        <GoStarFill/>
                    </div>
                </div>
                <div className='effect-white-2'></div>
            </div>
        </div>
    );
}

export default TravelSafe;
