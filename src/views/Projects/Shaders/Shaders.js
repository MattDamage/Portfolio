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
        This is an example of a very cool type of shader a PBR shader. PBR stands for physically based rendering. Its based of how light would physically interact with objects. It aims are acheving photo realism. In order to allow the shader to simulate how light would reflect of an object you need give extra information to the shader. This extra information is most commonly in the form of image maps. For example this simple PBR showcase takes in not just the standard abledo texutre but it also takes in a metallic map, emission map, and smoothness map. A map tells the shader what parts of the surface should be metallic and how metallic should they be. The smoothness map tells how smooth parts of the object should be. This does not change the gemoetry but light interacts differently with smooth surfaces for example a well polished car body. And finally an emission map. This is not vital for a PBR shader but its neat to add. Some parts of the surface can be told to look like they are giving off light. This would be usefull for like a glowing lava material. the emission map controls this self illumation process.
        </p>
        <br/>
        <blockquote className ="codeShowcase"><pre><code>
         {'#pragma surface surf Lambert alpha:fade'}  <br/>
         {'struct Input {'}  <br/>
         {'    float3 viewDir;'}  <br/>
         {''}  <br/>
         {'float4 _RimColor;'}  <br/>
         {'float _RimPower;'}  <br/>
         {' '}  <br/>
         {'void surf (Input IN, inout SurfaceOutput o) {'}  <br/>
         {'    half rim = 1.0 - saturate(dot (normalize(IN.viewDir), o.Normal));'}  <br/>
         {'    o.Emission = _RimColor.rgb * pow (rim, _RimPower) * 1000 * _SinTime;'}  <br/>
         {'    o.Alpha = pow (rim, _RimPower);'}  <br/>
         {'}'}  <br/>
        
         {'}'}  <br/>
         



         
        </code></pre></blockquote>
       

        <p className="paragraph">
      Here is an example of compute shader that combine elements of the previous teciques to make something unique. This compute shader creates a hologram effect on whatever 3d object you apply the shader to.
        </p>
        <br/>
        <br/>  

        <button href="google.com" class="button button1" href="http://mattchang.lilcode.com/portfolio/proc-gen/">Test it out!</button>


       




        <Navbar/>

        </div>
    );
} 

export default About;