import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import '../App.css';

function News() {
    return (
        <div className='container-news'>
            <div className='newsletter'>
            <div className='arrow-up'><FaArrowUp/></div>
                <h1>Sing up to out newsletter</h1>
                <div className='form-news-letter'>
                    <div className='form-news-letter-input'>
                        <input type="email" id="input-news" placeholder="yourname@example.com" />
                        <button className='btn-news-letter'>
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