import React from "react";
import styles from './ProceduralGenerationPage.css';
import Navbar from "../../../components/Navbar/navbar";

import ScreenShot from "../../../assets/img/portfolio/ProceduralGeneration/PGS1.png";

export const About = () => {
    return(
        <div> 

        <h1 aria-label="Procedural Generation">
          
          <span className="highlight">P</span> 
          <span className="highlight">r</span> 
          <span className="highlight">o</span> 
          <span className="highlight">c</span> 
          <span className="highlight">e</span> 
          <span className="highlight">d</span> 
          <span className="highlight">u</span> 
          <span className="highlight">r</span> 
          <span className="highlight">a</span> 
          <span className="highlight">l</span> 
          <span className="highlight">&nbsp;</span> 
          <span className="highlight">g</span>
          <span className="highlight">e</span>
          <span className="highlight">n</span>
          <span className="highlight">r</span>
          <span className="highlight">a</span>
          <span className="highlight">t</span>
          <span className="highlight">i</span>
          <span className="highlight">o</span>
          <span className="highlight">n</span>
          
          
        </h1>
        
        <p className="paragraph"> This is a Procedural Generation tool that I created. It was developed to quickly and easily create detailed realistic looking enviroments.  
            <br/>
            The tool allows for importing height-maps. Along with methods for procedural terrain generation using Perlin noise, Midpoint displacement, and Vornoi. Also it will can simulate erosion from rain, wind, sun, and waves.
        </p >
        <br/>
        <br/>
        <br/>
        <h1 className ="header">How it works:</h1>
        <br/>
        <img src={ScreenShot} ></img>
        <p className="paragraph">
        based on height and steepness of that region. This allows for very natural terrain texturing with mountain ranges with tufts of grass on the sides and snow at its peck with rocky cliff faces. The Tool gives the option for generating different types of terrain like Perlin noise, Voronoi diagram, Diamond-Square algorithms/random midpoint displacement. Also, It allows for Height maps images to be loaded and projected on the Terrain.
        </p>
        <br/>
        <br/>
        <button href="google.com" class="button button1" href="http://mattchang.lilcode.com/portfolio/proc-gen/">Test it out!</button>
        <br/>
        <br/>
        <blockquote className ="codeShowcase"><pre><code>
         {' for (int y = 0; y < terrainData.heightmapHeight; y++) {'}  <br/>
         {'     for (int x = 0; x < terrainData.heightmapWidth; x++) { '}  <br/>
         {'         if (!(x == peak.x && y == peak.z)){'}  <br/>
         {'             float distanceToPeak = Vector2.Distance(peakLocation, new Vector2(x, y)) / maxDistance;'}  <br/>
         {'             float h = peak.y - distanceToPeak * voronoiFallOff - Mathf.Pow(distanceToPeak, voronoiDropOff);'}  <br/>
         {'             if(vornoiType == VornoiTypes.Combined) {'}  <br/>
    
         {'                 h = peak.y - distanceToPeak * voronoiFallOff - Mathf.Pow(distanceToPeak, voronoiDropOff);'}  <br/>
         {'             } '}<br/>
         {'             else if (vornoiType == VornoiTypes.Power) {'}  <br/>
         {'                 h = peak.y - Mathf.Pow(distanceToPeak, voronoiDropOff) * voronoiFallOff; // Power '}  <br/>
         {'             } '}<br/>
         {'             else if (vornoiType == VornoiTypes.SinPower) {'}  <br/>
         {'                 h = peak.y - Mathf.Pow(distanceToPeak * 3, voronoiDropOff ) * voronoiFallOff - Mathf.Sin(distanceToPeak * 2 * Mathf.PI)/ voronoiDropOff; '}  <br/>
         {'             } '}<br/>
         {'             else {'}  <br/>
         {'                 h = peak.y - distanceToPeak * voronoiFallOff;  // Linear '}  <br/>
         {'             } '}<br/>
         {'             if (heightMap[x, y] < h) { '}  <br/>
         {'                 heightMap[x, y] = h; '}  <br/>
         {'              } '}  <br/>
         {'         } '}  <br/>
         {'      } '}  <br/>
         {'    } '}  <br/>
        </code></pre></blockquote>
       

        <p className="paragraph">
        Here is the code that governs the Vornoi Terrian geneartion these nested for loops are responsible for traversing the 2D array and populating it with the correct height values that it calclates. It then takes the 2d array and stores it as height data for the terrian
        </p>


        <Navbar/>
        </div>
    );
} 

export default About;