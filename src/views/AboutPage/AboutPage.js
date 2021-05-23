import React from "react";
import styles from './AboutPage.css';
import Navbar from "../../components/Navbar/navbar";

export const About = () => {
    return(
        <div> 

        <h1 aria-label="About Myself:">
          
          <span className="highlight">A</span> 
          <span className="highlight">b</span> 
          <span className="highlight">o</span> 
          <span className="highlight">u</span> 
          <span className="highlight">t</span> 
          <span className="highlight">&nbsp;</span> 
          <span className="highlight">M</span> 
          <span className="highlight">y</span> 
          <span className="highlight">s</span> 
          <span className="highlight">e</span> 
          <span className="highlight">l</span> 
          <span className="highlight">f</span>
          <span className="highlight">:</span>
          
          
        </h1>
        
        <p className="paragraph"> Connected with the world of web developlment and have been intrested in technology for as long as I can remember. 
            <br/>
            I enjoy takeling intersting and new challenges with a penchant for attention to detail. 
            <br/>
            <br/>
            Anything tech will peak my intrest. And I love working with computers in any capacity. <br/>
            I especially enjoy creating games with the Unity3D engine  
        </p >



        <Navbar/>
        </div>
    ); 
} 

export default About;