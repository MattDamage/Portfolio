import React from "react";
import styles from './Moba.css';
import Navbar from "../../../components/Navbar/navbar";

import ScreenShot from "../../../assets/img/portfolio/Moba/SS1.png";
import ScreenShot2 from "../../../assets/img/portfolio/Moba/SS2.png";
import ScreenShot3 from "../../../assets/img/portfolio/Moba/SS3.png";




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
       <img src={ScreenShot} ></img>
       
        <br/>
        <h1 className ="header">Overview of the gameplay</h1>
        <br/>
        <img src={ScreenShot2} ></img>
        <p className="paragraph">
        The basic game loop is once you login in with through the account system you join a room. If possible you join a room that already has a player waiting in it. Once you join in and both players indicate they are ready to start they are both thrown into an arena. Each player has a wide range of attacks that their player can preform. There are 2 enemy towers that the player must destroy in order to win the match. Each player has an endless stream of AI in that aid their side. The map lay out allows for 3 paths for the player to take. The player could go through the center of the map in the main lane but they would have to combat the enemies powerful mid tower. Or the player could take either side path but they would have to condend with the netural side towers. If a player defeats these a temporary powerup will be droped. This powerup will boost one of the players stats  
        </p>
        <h1 className ="header">Overview of the components</h1>
        <p className="paragraph">
        The game was developed on the Unity3D game engine. The networking component is a 3rd party component called Photon. This allows for implementation of matchmaking into Unity projects. The game is written in C#. The account also system uses C# but it also uses PHP and MySQL to control. They all interact together to allow the user to use accounts to play the game. Care was put into to optimizing the game to be run on Untiy's webplayer. This allows for anyone with a modern internet browswer to run the game.
        </p>
       
        <br/>
        <p className="paragraph">        
        </p>

      
        <h1 className ="header">The networking</h1>
        <img src={ScreenShot3} ></img>
        <p className="paragraph">
        As mentioned before I am using the Unity3D engine with the third party photon networking addon Photon Unity Network(PUN). To acheive netowrking. Its room based which means that players join. These rooms are 2 players only since its a one vs one game. In the game the player, AI, and strucutres all are hooked up to the PUN. Not everything needs to be synched between the 2 network instances. For example the camera for each player is client side only. Varibles like health do however can't be client side. This is done with remote procedure call(RPC). RPCs invoke methods on the other client. For example a RPC is made when a player you do damage to another player.
        </p>
        <br/>
        <br/>  
        <h1 className ="header">The Player</h1>
        <p className="paragraph">
        In the game you play as a robot. As with the vast majority of the 3d Models in the game it was created by using a program called Blender3D. The character 
        </p>

        <button href="google.com" class="button button1" href="http://mattchang.lilcode.com/portfolio/MOBA/">Play the Game!</button>

       

       
       




        <Navbar/>

        </div>
    );
} 

export default About;