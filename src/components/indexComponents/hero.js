import React from 'react' 
import '../../App.css'
import {Link} from 'react-router-dom'

 function HeroBox() {

	return (

	    <div className="hero_text-box">
	        <div className="hero_text-box1">
	          <h4>Chat beyond limits with <span>i2Talk!</span></h4>
	        </div>

	        <div className="hero_text-box2">
	          <p>A web-based messaging app with focus on efficiency and convenience.</p>
	        </div>

	        <div className="hero_text-btn">
	          <Link to="/features"><button className="hero-btn1">Explore</button></Link>
	          <button className="hero-btn2">Sign Up</button>
	        </div>
	    </div>
		
	);
}

export default HeroBox
//this componenent contains the content of the animated herobox in the index/home page