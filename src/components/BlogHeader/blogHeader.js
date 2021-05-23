import React from "react";
import styles from './blogHeader.css';

export const BlogHeader = (props) => {
    return (
        <div> 
            <figure className = "postHeader">
                
                <p className="postHeaderTitle"> 
                    {props.headerTitle}
                </p >
                
            </figure>
        </div>
    );
}    

export default BlogHeader;