import React from "react";
import styles from './blogPostImage.css';
import BlogHeader from '../BlogHeader/blogHeader'



export const BlogImageFixed = (props) => {
    return (
        <div> 
            <figure className="postOutline">

                <BlogHeader headerTitle={props.headerTitle}/>
                <img class = "postImage" src={props.postImage} alt="Test"></img>

                <p className="postImageContent"> 
                    {props.postContent}
                </p >
                
                <p class = "postMetaData">
                    Posted: {props.postMetaData}
                </p>
                
            </figure>
        </div>
    );
}    
export default BlogImageFixed;