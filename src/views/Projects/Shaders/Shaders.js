import React from "react";
import styles from './Shaders.css';
import Navbar from "../../../components/Navbar/navbar";

import ScreenShot from "../../../assets/img/portfolio/Shaders/BlinnPhong1.png";
import ScreenShot2 from "../../../assets/img/portfolio/Shaders/transparency.png";
import ScreenShot3  from "../../../assets/img/portfolio/Shaders/Example1Shader.png";
import ScreenShot4  from "../../../assets/img/portfolio/Shaders/StadnardPBR.png";

import PongShowCase from "../../../assets/img/portfolio/Machine Learning/pongVideo1.mov";


export const About = () => {
    return(
        <div> 

        <h1 aria-label="Shaders">
          <span className="highlight">S</span>  
          <span className="highlight">h</span> 
          <span className="highlight">a</span> 
          <span className="highlight">d</span> 
          <span className="highlight">e</span> 
          <span className="highlight">r</span> 
          <span className="highlight">s</span> 
        </h1>
        
        <p className="paragraph"> Shaders are a vital part of mdoern computer graphics. Shaders are bascily programs that tell how light should make an object look. .Almost anything renderd in a 3D scence requires a shader. Shaders come in many froms from simple shaders that outputs a single colored pixel to the screen to complex PBR shaders for 3D objects that take in bump maps and support sub-surface scattering they needed.
            <br/>
            For this project I focused on 3D shaders that are meant to run in real time on the GPU. These types of shaders would be used in a game to handle the shading of 3d Objects.
        </p >
       
        <br/>
        <br/>
        <h1 className ="header">Blinn-Phong Shader:</h1>
        <br/>
        <img src={ScreenShot} ></img>
       
        <p className="paragraph">
        This is example I made of a Blinn–Phong shader or a "modified Phong reflection model". This is a simple shader that is based of the Phong shader. This type of shader is the default for many different rendering APIs.  
        </p>
        
        <img src={ScreenShot2} ></img>
        
        <h1 className ="header">Transparency Shader:</h1>
        <br/>
        <p className="paragraph">
        This is another example shader I created. This is a transparency shader. You may notice that the object that I appled the shader to is not competly transparent. This is because this shader takes in maps. Maps are images/textures that are applied to these objects. I tell the shader to take these maps as inputs. Some of these maps are responsible for the color you see on the tile surface. Another map is responsible for the transparency. Its a greyscale image where the value of the different pixels determine wether that part should be transprent or not.
        </p>
        <img src={ScreenShot3} ></img>
        <p className="paragraph">
        This is another example of the same shader. This time a stained glass window. In this example the transparency map tells the shader to make the image semi opaque like a real window. In this example you can cleary see the other map that is in play. If you look at glass shards on the window you can see what looks to be uneveness on the surface of the window. It looks bumpy. This is not because there is acutally any extra detail on the 3d objects it a simple flat plane. This surface detail is created by what is called a normal map. A normal map takes in an image and uses that to sor of fake surface detail. It does not add any gemoetry to the surface or even change the prexisiting gemoetry it just changes how the light interacts with the surface. It makes it appear as if there are devations in the surface where the normal map says there is. There are limitaions to this method. If viewing for an extreme angle it becomes apperant that its a facade. Althugh its still  a great way to add detail with relativly little cost to preformance
        </p>
        <h1 className ="header">PBR Shader:</h1>
        <p className="paragraph">
        This is an example of a very cool type of shader a PBR shader. PBR stands for physically based rendering.
        </p>
        <br/>
        <blockquote className ="codeShowcase"><pre><code>
         {'void UpdateWeights(List<double> outputs, List<double> desiredOutput)'}  <br/>
         {'{'}  <br/>
         {'    for(int i = numHidden; i >= 0; i--)'}  <br/>
         {'    {'}  <br/>
         {'         if(i == numHidden)'}  <br/>
         {'         {'}  <br/>
         {'         error = desiredOutput[j] - outputs[j];'}  <br/>
         {'         layers[i].neurons[j].errorGradient = outputs[j] * (1-outputs[j]) * error;'}  <br/>
         {'         }'}  <br/>
         {'         else'}  <br/>
         {'         {'}  <br/>
         {'             layers[i].neurons[j].errorGradient = layers[i].neurons[j].output * (1-layers[i].neurons[j].output);'}  <br/>
         {'             double errorGradSum = 0;'}  <br/>
         {'             for(int p = 0; p < layers[i+1].numNeurons; p++)'}  <br/>
         {'             {'}  <br/>
         {'                 errorGradSum += layers[i+1].neurons[p].errorGradient * layers[i+1].neurons[p].weights[j];'}  <br/>
         {'             }'}  <br/>
         {'             layers[i].neurons[j].errorGradient *= errorGradSum;'}  <br/>
         {'          }'}  <br/>
         {'          for(int k = 0; k < layers[i].neurons[j].numInputs; k++)'}  <br/>
         {'          {'}  <br/>
         {'             if(i == numHidden)'}  <br/>
         {'             {'}  <br/>
         {'                  error = desiredOutput[j] - outputs[j];'}  <br/>
         {'                  layers[i].neurons[j].weights[k] += alpha * layers[i].neurons[j].inputs[k] * error;'}  <br/>
         {'                  }'}  <br/>
         {'                  else'}  <br/>
         {'                  {'}  <br/>
         {'                     layers[i].neurons[j].weights[k] += alpha * layers[i].neurons[j].inputs[k] * layers[i].neurons[j].errorGradient;'}  <br/>
         {'                  }'}  <br/>
         {'             }'}  <br/>
         {'             layers[i].neurons[j].bias += alpha * -1 * layers[i].neurons[j].errorGradient;'}  <br/>
         {'          }'}  <br/>
         {'    }'}  <br/>
         {'}'}  <br/>
         
         
        </code></pre></blockquote>
       

        <p className="paragraph">
       Here is the compute shader that makes the PBR shader possible. 
        </p>
        <br/>
        <br/>  

        <button href="google.com" class="button button1" href="http://mattchang.lilcode.com/portfolio/proc-gen/">Test it out!</button>


       




        <Navbar/>

        </div>
    );
} 

export default About;