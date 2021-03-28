import React from "react";
import styles from './MachineLearning.css';
import Navbar from "../../../components/Navbar/navbar";

import ScreenShot from "../../../assets/img/portfolio/Machine Learning/SS2.png";

import PongShowCase from "../../../assets/img/portfolio/Machine Learning/pongVideo1.mov";


export const About = () => {
    return(
        <div> 

        <h1 aria-label="Machine Learning">
          
          <span className="highlight">M</span>  
          <span className="highlight">a</span> 
          <span className="highlight">c</span> 
          <span className="highlight">h</span> 
          <span className="highlight">i</span> 
          <span className="highlight">n</span> 
          <span className="highlight">e</span> 
          <span className="highlight">&nbsp;</span> 
          <span className="highlight">l</span> 
          <span className="highlight">e</span> 
          <span className="highlight">e</span>
          <span className="highlight">a</span>
          <span className="highlight">r</span>
          <span className="highlight">n</span>
          <span className="highlight">i</span>
          <span className="highlight">n</span>
          <span className="highlight">g</span>
          
          
        </h1>
        
        <p className="paragraph"> Machine learning is a field in computer science that utilizes algorithms that improve over time. in essence these algortihms "learn"   
            <br/>
            There is a wide variety of machine learning algorithms from simple perceptrons to multi layerd ANNs. And how you train these algorithms vary greatly from reinforcement learning to GAN)
        </p >
        <br/>
        <img src={ScreenShot} ></img>
        <br/>
        <br/>
        <h1 className ="header">Pong:</h1>
        <br/>
       
        <p className="paragraph">
        This is simply pong, but with a twist, your oppoennts paddle is controled by a ANN.   
        </p>
        
        <video width="750" height="500" controls >
            <source src={PongShowCase} type="video/mov"/>
        </video>
        
        <br/>
        <p className="paragraph">
        IN this little example you can specify the amount of layers and how many neruons should be per layer  
        </p>

        <br/>
        <blockquote className ="codeShowcase"><pre><code>
         {'void UpdateWeights(List<double> outputs, List<double> desiredOutput)'}  <br/>
         {'{'}  <br/>
         {'    for(int i = numHidden; i >= 0; i--)'}  <br/>
         {'    {'}  <br/>
         {'         if(i == numHidden)'}  <br/>
         {'         {'}  <br/>
         {'         error = desiredOutput[j] - outputs[j];'}  <br/>
         {'         layers[i].neurons[j].errorGradient = outputs[j] * (1-outputs[j]) * error;'}  <br/>
         {'         }'}  <br/>
         {'         else'}  <br/>
         {'         {'}  <br/>
         {'             layers[i].neurons[j].errorGradient = layers[i].neurons[j].output * (1-layers[i].neurons[j].output);'}  <br/>
         {'             double errorGradSum = 0;'}  <br/>
         {'             for(int p = 0; p < layers[i+1].numNeurons; p++)'}  <br/>
         {'             {'}  <br/>
         {'                 errorGradSum += layers[i+1].neurons[p].errorGradient * layers[i+1].neurons[p].weights[j];'}  <br/>
         {'             }'}  <br/>
         {'             layers[i].neurons[j].errorGradient *= errorGradSum;'}  <br/>
         {'          }'}  <br/>
         {'          for(int k = 0; k < layers[i].neurons[j].numInputs; k++)'}  <br/>
         {'          {'}  <br/>
         {'             if(i == numHidden)'}  <br/>
         {'             {'}  <br/>
         {'                  error = desiredOutput[j] - outputs[j];'}  <br/>
         {'                  layers[i].neurons[j].weights[k] += alpha * layers[i].neurons[j].inputs[k] * error;'}  <br/>
         {'                  }'}  <br/>
         {'                  else'}  <br/>
         {'                  {'}  <br/>
         {'                     layers[i].neurons[j].weights[k] += alpha * layers[i].neurons[j].inputs[k] * layers[i].neurons[j].errorGradient;'}  <br/>
         {'                  }'}  <br/>
         {'             }'}  <br/>
         {'             layers[i].neurons[j].bias += alpha * -1 * layers[i].neurons[j].errorGradient;'}  <br/>
         {'          }'}  <br/>
         {'    }'}  <br/>
         {'}'}  <br/>
         
         
        </code></pre></blockquote>
       

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