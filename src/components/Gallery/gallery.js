import React from "react";
import styles from './gallery.css';
import Background from "../../assets/img/Name.png"


import MLIcon from "../../assets/img/portfolio/BumpDiffuseExample.png";
import ProcGenIcon from "../../assets/img/portfolio/ProceduralGeneration/Proc.png";
import ShadersIcon from "../../assets/img/portfolio/Machine Learning/Machine LearningThumbNail.png";
import MobaIcon from "../../assets/img/portfolio/Moba/SS1.png";

export const Gallery = () => {
    return (
        <div> 

            <div class="flex-container">
                
                <figure class="postGallery">
                    <a href="/project/proc-gen">
                        <img href="/project/proc-gen" class="item" src={ProcGenIcon} alt="Example image"></img>
                    </a>
                    <figcaption>Procedural Generation</figcaption>
                </figure>

                <figure class="postGallery">
                    <a href="/project/shaders">
                        <img href="/project/shaders" class="item" src={ShadersIcon} alt="Example image"></img>
                    </a>
                    <figcaption>Shaders</figcaption>
                </figure>

                <figure class="postGallery">
                    <a href="/project/machineLearning">
                        <img href="/about" class="item" src={MLIcon} alt="Example image"></img>
                    </a>
                    <figcaption>Machine Learning</figcaption>
                </figure>

                <figure class="postGallery">
                    <a href="/project/moba">
                    <img href="/project/moba" class="item" src={MobaIcon} alt="Moba game"></img>
                    </a>
                    <figcaption>Moba game</figcaption>
                </figure>

                
            
            
            </div>

        </div>
    );
}    
    export default Gallery;