import React from 'react';
import '../App.css';

function News() {
    return (
        <div className='container'>
            <div className='newsletter'>
                <h1>Sing up to out newsletter</h1>
                <div className='form-news-letter'>
                    <input type="email" id="input-news" placeholder="yourname@example.com" />
                    <button className='btn-news-letter'>
                        Sing up
                    </button>
                    <h4>By doing so, we will send you our offers, new destinations, promotions, etc. Don't miss anything!</h4>
                </div>
            </div>
        </div>
    );
}

export default News;