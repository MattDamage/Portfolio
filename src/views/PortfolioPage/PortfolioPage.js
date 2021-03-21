import React from "react";
import styles from './PortfolioPage.css';
import Navbar from "../../components/Navbar/navbar";
import Gallery from "../../components/Gallery/gallery";


//

//<img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
export const About = () => {
    return(
        <div> 
             <h1 aria-label="My Projects">
          <span className="highlight">M</span> 
          <span className="highlight">y</span> 
          <span className="highlight">&nbsp;</span> 
          <span className="highlight">P</span> 
          <span className="highlight">r</span> 
          <span className="highlight">o</span> 
         
          <span className="highlight">j</span> 
          <span className="highlight">e</span> 
          <span className="highlight">c</span> 
          <span className="highlight">t</span> 
          <span className="highlight">s</span> 
          
          
          
        </h1>

        <br/>
        <p className="description"> Click on a porject to learn more. </p>
        <br/>
        <br/>
        <br/>
        <Gallery/>
        <Navbar/>
        </div>
    );
} 

export default About;