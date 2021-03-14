import React from "react";
import styles from './navbar.css';
import Background from "../../assets/img/Name.png"

export const Navbar = () => {
    return (
        <div class="sidenav">

        <img src={Background} ></img>
        <b href="#name">Matt</b>
        <c href="#name">Web Developer</c>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="/">Home</a>
        <br/>
        <a href="/about">About</a>
        <br/>
        <a href="#my skills">My Skills</a>
        <br/>
        <a href="/portfolio">Portfolio</a>
      
        <br/>
        <a href="#contact">Contact</a>

      </div>

    );
}

export default Navbar;