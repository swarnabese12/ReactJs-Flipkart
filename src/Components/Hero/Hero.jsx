import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand.png'
import hero_image from '../Assets/hero3.jpg'
//import arrow_icon from '../Assets/arrow.png'

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-left">
               <h2>NEW ARRIVALS ONLY</h2>
               <div>
                 <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" height="120" width="170"/>
                 </div>
                 <p>Collections</p>
                 <p>for everyone</p>
               </div>
               <div className="hero-latest-btn">
                <div>Latest collections</div>
                {/* <img src={arrow_icon} alt="" height="30" width="50"/> */}
               </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" height="600"/>
            </div>
        </div>
    )
}

export default Hero