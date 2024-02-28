import React from 'react';
import '../App.css';

function Footer() {
    return (
        <div className='container-footer'>
            <div className='footer'>
                <h2>TravelHub</h2>
                <div className='footer-links'>
                    <div className='link-destination'>
                        <h3>Destinations</h3>
                        <ul>
                            <li>List of countries</li>
                            <li>Buenos Aires</li>
                            <li>Italia</li>
                            <li>México</li>
                            <li>Usa</li>
                        </ul>
                    </div>
                    <div className='link-us'>
                        <h3>Us</h3>
                        <ul>
                            <li>About us</li>
                            <li>Policies</li>
                            <li>Trust and security</li>
                            <li>Contact us</li>
                            <li>Work with us</li>
                        </ul>
                    </div>
                    <div className='link-blog'>
                        <h3>Blog</h3>
                        <ul>
                            <li>Landscapes</li>
                            <li>Activities</li>
                            <li>Gastronomy</li>
                            <li>Cultural</li>
                            <li>Historical</li>
                            <li>Economic</li>
                        </ul>
                    </div>
                    <div className='link-bookings'>
                        <h3>Bookings</h3>
                        <ul>
                            <li>My trips</li>
                            <li>Accommodations</li>
                            <li>Favorities</li>
                        </ul>
                    </div>
                </div>
                <div className='copy'>
                    <h5>Copyright ©TravelHub 2024</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;