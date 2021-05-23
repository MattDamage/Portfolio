import React from "react";
import styles from './blogHeaderImage.css';


export const BlogHeaderImage = (props) => {

    if(props.overlayImageText){
        return (
            <div> 
                <figure className = "postHeader">
                
                

                    {props.headerImage ?    
                        <img class = "headerImage" src={props.headerImage} alt="Test"></img>
                        :
                        <></>
                    }

                    {props.headerImage ?    
                        <p className="headerImageText">  {props.headerTitle} </p >
                        :
                        <p className="postHeaderTitle">  {props.headerTitle} </p >
                    }

                </figure>
            </div>
        );
    }
    else 
    {
        return(
            <div> 
                <figure className = "postHeader">
                    
                    {props.headerImage ?    
                        <img class = "headerImageNoOverlay" src={props.headerImage} alt="Test"></img>
                        :
                        <></>
                    }

                    {props.headerImage ?    
                        <p className="headerImageTextNoOverlay">  {props.headerTitle} </p >
                        :
                        <p className="postHeaderTitle">  {props.headerTitle} </p >
                    }

                </figure>
            </div>
        );
    }
}    
export default BlogHeaderImage;