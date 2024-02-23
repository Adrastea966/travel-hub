import React from 'react';
import '../App.css';

function Reviews() {
    return (
        <div className='container'>
            <div className='reviews'>
                <h1>What people think</h1>
                <div className='container-reviews-cards'>
                    <div className='container-reviews-card-top'>
                        <div className='review-card'>
                            <h5>Jhonson & Jhonson hotel</h5>
                            <p>"Good service and good atmosphere. All clean and the staff very helpful. They allow pets and also allow them in the hotel restaurants"</p>
                            <div className='review-card-username'>
                                <h4>Username</h4>
                                <img src='#'></img>
                            </div>
                        </div>
                        <div className='review-card'>
                            <h5>Cancun</h5>
                            <p>"Cancun's beaches are the best there is. Very clean, spacious, the water is very clear. Ideal if you want to relax💫"</p>
                            <div className='review-card-username'>
                                <h4>Username</h4>
                                <img src='#'></img>
                            </div>
                        </div>
                        <div className='review-card'>
                            <h5>Top 5 foods you should try in...</h5>
                            <p>"The barbecue I tried in Buenos Aires has no comparison. The hotel I stayed at was 10 points, and the people there are very friendly. Hold on to the dunks 🧉🤟"</p>
                            <div className='review-card-username'>
                                <h4>Username</h4>
                                <img src='#'></img>
                            </div>
                        </div>
                    </div>
                    <div className='container-reviews-card-bottom'>
                        <div className='review-card'>
                            <h5>Travel tips: guide</h5>
                            <p>"I never thought I would need to read a guide to see if I'm ready for a trip 😂. Very useful, read it!"</p>
                            <div className='review-card-username'>
                                <h4>Username</h4>
                                <img src='#'></img>
                            </div>
                        </div>
                        <div className='review-card'>
                            <h5>Natural malt: 6 very Mediterra-...</h5>
                            <p>"A very old place in the world, full of wisdom and that gives usa beautiful view. Ideal to go as a family and learn together 👍"</p>
                            <div className='review-card-username'>
                                <h4>Username</h4>
                                <img src='#'></img>
                            </div>
                        </div>
                        <div className='review-card'>
                            <h5>In House BA hotel</h5>
                            <p>"Very nice and cozy hotel. They didn't take very good care of me at check-in, but I can't complain about the rest."</p>
                            <div className='review-card-username'>
                                <h4>Username</h4>
                                <img src='#'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;