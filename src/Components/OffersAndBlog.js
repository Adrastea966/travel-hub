import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import '../App.css';

function OffersAndBlog() {
    return (
        <div className='container'>
            <div className='offers-and-blog'>
                <div className='container-offers-and-blog'>
                    <div className='container-offers'>
                        <h1>Offers for you</h1>
                        <div className='offers'>
                            <div className='offer-1'>
                                <h2>¡Get 15%!</h2>
                                <h3>Available until April 4</h3>
                                <p>Save 15% or more when you book and stay before April 4, 2024</p>
                                <div className='btn-apply'><button className='apply'>Apply<IoIosArrowForward /></button></div>
                            </div>
                            <div className='offer-2'>
                                <h2>¡Get 30%!</h2>
                                <h3>Available until May 10</h3>
                                <p>Save 30% or more when you book and stay before May 10, 2024</p>
                                <div className='btn-apply'><button className='apply'>Apply<IoIosArrowForward /></button></div>
                            </div>
                        </div>
                    </div>
                    <div className='container-blog'>
                        <div className='title-blog-and-see-all-btn'>
                            <h2>Follow our blog</h2>
                            <a href='#'>Se all<IoIosArrowForward /></a>
                        </div>
                        <div className='blog'>
                            <div className='blog-card'>
                                <img src='#'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>5 things you...</h4>
                                        <h5>1 Feb</h5>
                                    </div>
                                    <p>Times Squere is the heart of New York, a symbol of this city...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Activities</h5>
                                        <a href='#'>Read article<IoIosArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-card'>
                                <img src='#'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>5 things you...</h4>
                                        <h5>1 Feb</h5>
                                    </div>
                                    <p>Times Squere is the heart of New York, a symbol of this city...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Activities</h5>
                                        <a href='#'>Read article<IoIosArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-card'>
                                <img src='#'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>5 things you...</h4>
                                        <h5>1 Feb</h5>
                                    </div>
                                    <p>Times Squere is the heart of New York, a symbol of this city...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Activities</h5>
                                        <a href='#'>Read article<IoIosArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-card'>
                                <img src='#'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>5 things you...</h4>
                                        <h5>1 Feb</h5>
                                    </div>
                                    <p>Times Squere is the heart of New York, a symbol of this city...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Activities</h5>
                                        <a href='#'>Read article<IoIosArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffersAndBlog;