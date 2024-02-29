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
                                <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/image-offers_ea9jsy'></img>
                                <div className='contain-offer-1'>
                                    <h2>¡Get 15%!</h2>
                                    <h3>Available until April 4</h3>
                                    <p>Save 15% or more when you book and stay before April 4, 2024</p>
                                    <div className='btn-apply'><button className='apply'>Apply<IoIosArrowForward /></button></div>
                                </div>
                            </div>
                            <div className='offer-2'>
                            <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/image-two-offers_c5li1p'></img>
                                <div className='contain-offer-2'>
                                    <h2>¡Get 30%!</h2>
                                    <h3>Available until May 10</h3>
                                    <p>Save 30% or more when you book and stay before May 10, 2024</p>
                                    <div className='btn-apply'><button className='apply'>Apply<IoIosArrowForward /></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-blog'>
                        <div className='title-blog-and-see-all-btn'>
                            <h2>Follow our blog</h2>
                            <a href='#'>Se all<IoIosArrowForward /></a>
                        </div>
                        <div className='blog'>
                            <div data-aos="fade-left" className='blog-card'>
                                <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/image-ny-blog_qt2lxm'></img>
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
                            <div data-aos="fade-left" data-aos-delay="100" className='blog-card'>
                                <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/image-tur-blog_nmx1hy'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>Visit Capadocia...</h4>
                                        <h5>28 En</h5>
                                    </div>
                                    <p>Fascinating destination, it has more than 600 cave churches...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Landscapes</h5>
                                        <a href='#'>Read article<IoIosArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="150" className='blog-card'>
                                <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/image-gastro-blog_er2lzo'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>Gazpacho it's the...</h4>
                                        <h5>19 En</h5>
                                    </div>
                                    <p>A cold soup that mixes typical garden ingredients...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Gastronomy</h5>
                                        <a href='#'>Read article<IoIosArrowForward /></a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="200" className='blog-card'>
                                <img src='https://res.cloudinary.com/duumn6wv5/image/upload/travel-hub/mujer-viajera_kjcus0'></img>
                                <div className='blog-card-contain'>
                                    <div className='blog-card-contain-top'>
                                        <h4>10 cheapest...</h4>
                                        <h5>30 dec</h5>
                                    </div>
                                    <p>Traveling is nice, but expensive. We show you the most economical...</p>
                                    <div className='blog-card-contain-bottom'>
                                        <h5>Economic</h5>
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