import React from "react";
import styles from './Moba.css';
import Navbar from "../../../components/Navbar/navbar";

import ScreenShot from "../../../assets/img/portfolio/Moba/SS1.png";




export const About = () => {
    return(
        <div> 

        <h1 aria-label="Moba">
          
          <span className="highlight">M</span>  
          <span className="highlight">O</span> 
          <span className="highlight">B</span> 
          <span className="highlight">A</span> 
        
          
        </h1>
        <p className="paragraph"> A MOBA is a type of game that is played online. Its in the name, It stands for Multiplayer online battle arena. Popular Mobas today inlcude Dota and Leauge of Legends. In Mobas you battle against an enemy team. You can win in Mobas a number of ways inlcuding destroying the enterity of the ennmy team or destroying their base. Usually there are AI minions that each side has. These guys spawn in and run toward the enemy side. They are usally rather easy targest and don't pose that huge of a threat. There are also addiontal towers on the field that drop powerups and other usefull items. Its common to have multile players on each team usually 5 but for my Moba i've decided it would be best as a one vs one exprience. All gameplay mechanaics are balenced for this purpose.
            
        </p >
      
       
        <br/>
        <h1 className ="header">The gameplay</h1>
        <br/>
       
        <p className="paragraph">
        The basic game loop is once you login in with through the account system you join a room. If possible you join a room that already has a player waiting in it. Once you join in and both players indicate they are ready to start they are both thrown into an arena. Each player has a wide range of attacks that their player can preform. There are 2 enemy towers that the player must destroy in order to win the match. Each player has an endless stream of AI in that aid their side. The map lay out allows for 3 paths for the player to take. The player could go through the center of the map in the main lane but they would have to combat the enemies powerful mid tower. Or the player could take either side path but they would have to condend with the netural side towers. If a player defeats these a temporary powerup will be droped. This powerup will boost one of the players stats  
        </p>
        <h1 className ="header">Overview of the components</h1>
        <p className="paragraph">
        The game was developed on the Unity3D game engine. The networking component is a 3rd party component called Photon. This allows for implementation of matchmaking into Unity projects. The game is written in C#. The account system uses C# aswell but it also uses PHP and MySQL.
        </p>
       
        <br/>
        <p className="paragraph">
        
        </p>

        
       

        <p className="paragraph">
       Here is the method that is responsible for updating the weights for the ANN. It iterates through the nerual network layers. And in each layer it iterates through the neurons updating the weights and biases 
        </p>
        <br/>
        <br/>  

        <button href="google.com" class="button button1" href="http://mattchang.lilcode.com/portfolio/proc-gen/">Test it out!</button>


       




        <Navbar/>

        </div>
    );
} 

export default About;