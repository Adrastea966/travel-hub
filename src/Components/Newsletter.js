import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import '../App.css';

function News() {
    const scrollToTop = () => {
        const header = document.getElementById('header');
        if (header) {
            header.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='container-news'>
            <div className='newsletter'>
            <div className='arrow-up' onClick={scrollToTop}><FaArrowUp/></div>
                <h1>Sing up to out newsletter</h1>
                <div className='form-news-letter'>
                    <div className='form-news-letter-input'>
                        <input data-aos="fade-down" type="email" id="input-news" placeholder="yourname@example.com" />
                        <button data-aos="fade-down" data-aos-delay="100" className='btn-news-letter'>
                            Sing up
                        </button>
                    </div>
                    <h4>By doing so, we will send you our offers, new destinations, promotions, etc. Don't miss anything!</h4>
                </div>
            </div>
        </div>
    );
}

export default News;