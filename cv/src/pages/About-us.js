import React from 'react';
import "./About-us.css";
import pic from "../assets/example_avatar_2.jpg";
import Dashboard from '../Dashboard';

const About = () => {
    return (
    <>< Dashboard/><div class="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div><h2 className='about-head'>Team</h2>
        <div class="row">
           <div class="column">
                <div class="card">
               
                <img src={pic} alt=""/>
                <div class="container">
        <h2>Nadine Kantetere</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Nadine@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
                </div>

            </div>
        </div></>
        

    
    );
  };
  
  export default About;