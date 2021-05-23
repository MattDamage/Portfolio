import React from "react";
import styles from './blogPostText.css';
import BlogHeader from '../BlogHeader/blogHeader'
import BlogHeaderImage from '../BlogHeader/blogHeaderImage'

export const BlogText = (props) => {
    // console.log(hasImage);
    return (
        <div> 
            <figure className="postOutline">


            {props.hasImage ?
            
                <BlogHeader headerTitle ={props.headerTitle}/>
                :
                <BlogHeaderImage headerTitle ={props.headerTitle} headerImage = {props.headerImage} overlayImageText={props.overlayImageText}/>
            }

           

            <p className="postContent"> 
                {props.postContent}
            </p >
            <p class = "postMetaData">
                Posted: {props.postMetaData}
            </p>

        </figure>
           

        </div>
    );
}    
export default BlogText;