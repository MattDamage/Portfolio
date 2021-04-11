import React from "react";
import styles from './gallery.css';
import Background from "../../assets/img/Name.png"


import MLIcon from "../../assets/img/portfolio/BumpDiffuseExample.png";
import ProcGenIcon from "../../assets/img/portfolio/ProceduralGeneration/Proc.png";
import ShadersIcon from "../../assets/img/portfolio/Machine Learning/Machine LearningThumbNail.png";


export const Gallery = () => {
    return (
        <div> 

            <div class="flex-container">
                
                <figure>
                    <a href="/project/proc-gen">
                        <img href="/project/proc-gen" class="item" src={ProcGenIcon} alt="Example image"></img>
                    </a>
                    <figcaption>Procedural Generation</figcaption>
                </figure>

                <figure>
                    <a href="/project/shaders">
                        <img href="/project/shaders" class="item" src={ShadersIcon} alt="Example image"></img>
                    </a>
                    <figcaption>Shaders</figcaption>
                </figure>

                <figure>
                    <a href="/project/machineLearning">
                        <img href="/about" class="item" src={MLIcon} alt="Example image"></img>
                    </a>
                    <figcaption>Machine Learning</figcaption>
                </figure>

                <figure>
                    <a href="/about">
                    <img href="/about" class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
                    </a>
                    <figcaption>A random image</figcaption>
                </figure>

                <figure>
                    <a href="/about">
                        <img href="/about" class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"></img>
                    </a>
                    <figcaption>A random image</figcaption>
                </figure>

            
            
            </div>

        </div>
    );
}    
    export default Gallery;