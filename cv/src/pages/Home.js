import React from "react";
import "./Home.css";
import "./style.css";
import Dashboard from '../Dashboard';


const Home = () => {
    return (
    <>< Dashboard/>
    <div class="banner-home">
    <div className="backgroundstyle"><h1>Here for your career</h1><br/><h2><span>Get a CV in 5 minutes with our CV Builder </span></h2>
                <h4>Create, edit and download an unlimited number of CVs <br/>for FREE!</h4></div>
                <button type="submit" onclick="./resume.js">Click Here</button>
</div></>

);
  };
  
  export default Home;
  