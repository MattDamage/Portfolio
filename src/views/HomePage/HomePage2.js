import React from "react";
import ReactDOM from "react-dom";

import styles from './HomePage.css';
import Navbar from "../../components/Navbar/navbar";

//<img src={Background}/> 
// <h1 style={{color: "purple"}}>Hi,</h1>
/*

 <h1>Hi,</h1>
        <h1>Im Matthew Chang,</h1>
        <h1>a web developer</h1> 
 <a href="#services">My Skills</a>
*/
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
    
      <div> 
        
        
        <span className="smallDecoration">{"<body>"} </span>
        <br/>

       
        <span className="smallDecoration-h1">{'<h1>'} </span>


        <h1 aria-label="Hi, I'm Matt, web developer">
          <div>
          <span className="highlight">H</span> 
          <span className="highlight">i</span> 
          <span className="highlight">,</span> 
        <br/>
          <span className="highlight">I</span> 
          <span className="highlight">'</span> 
          <span className="highlight">m</span> 
          <span className="highlight">&nbsp;</span> 
          <span className="highlight">M</span> 
          <span className="highlight">a</span> 
          <span className="highlight">t</span> 
          <span className="highlight">t</span> 
          <span className="highlight">h</span> 
          <span className="highlight">e</span> 
          <span className="highlight">w</span>
          <span className="highlight">&nbsp;</span>
          <span className="highlight">C</span> 
          <span className="highlight">h</span> 
          <span className="highlight">a</span> 
          <span className="highlight">n</span> 
          <span className="highlight">g</span> 
          <span className="highlight">,</span> 
        <br/>
          <span className="highlight">w</span> 
          <span className="highlight">e</span>
          <span className="highlight">b</span>
          <span className="highlight">&nbsp;</span> 
          <span className="highlight">d</span>
          <span className="highlight">e</span>
          <span className="highlight">v</span> 
          <span className="highlight">e</span>
          <span className="highlight">l</span>
          <span className="highlight">o</span>
          <span className="highlight">p</span>
          <span className="highlight">e</span>
          <span className="highlight">r</span>
          <span className="highlight">.</span>
          </div>
        </h1>
       
        <span className="largeDecoration"> Front End Developer / Unity3D expert </span>
        
        <br/>


        <button class="button button1">Contact me!</button>
        <br/>
        <span className="smallDecoration">{'</body>'} </span >
        

        
        <Navbar/>


      </div>
    );
  }


  
}

