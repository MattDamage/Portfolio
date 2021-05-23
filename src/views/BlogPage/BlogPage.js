import React from "react";
import styles from './BlogPage.css';
import Navbar from "../../components/Navbar/navbar";
import BlogText from "../../components/BlogBody/blogPostText";
import BlogImage from "../../components/BlogBody/blogPostImage";
import imageTest from "../../assets/img/bg3.jpg"
import Header from "../../components/BlogHeader/blogHeader";

export const Blog = () => {
    return(
        <div> 


        <h1 aria-label="About Myself:">
          <span className="highlight">B</span> 
          <span className="highlight">l</span> 
          <span className="highlight">o</span> 
          <span className="highlight">g</span> 
        </h1>
        
        <BlogText postContent={"As you can see this is a blog page but how does it work? Well React which is a JavaScript library designed to allow you to build user interfaces or UIs. React is component based. This allows me to create different encapsulated components that do specific tasks. These components can be reused and help immensely with managing the complexity of building the UI. Each blog component that you see on this page is a component. Each of these components take in a few variables. These variables include information like the blog header or the content of the post. Also the component is willing to take in other variables like an image to display in the blog body or an image to display in the  blog header. Even the header itself is a component which can be changed. All of this was done to allow us to implement many features that are very useful for creating a blog. Also it allows me to do it without repeating the same chunks of code over and over again for each blog post, each post being its own unique piece of code. Instead I simple need to declare a new blog component and pass the content to it and its done ."} postMetaData={"5/23/21"} headerTitle = {"Blog components in React"} hasImage={false} overlayImageText={true} />

        <BlogImage postContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} postMetaData={"5/9/21"}  headerTitle = {"This is a test"} postImage={imageTest} hasImage={false}/>

        <BlogText postContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} postMetaData={"5/9/21"}  headerTitle = {"This is a test"} headerImage={imageTest} hasImage={false} overlayImageText={true}/>

        <Navbar/>
        </div>
    );
} 

export default Blog;