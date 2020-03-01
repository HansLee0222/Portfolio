import React, {Component} from 'react';
import unity from './images/Unity.jpg';
import dna from './images/dna.png';
import react from './images/React.png'

class About extends Component{
  render(){
    return(
      <div className = 'about-section' id = "about">
        <div className= 'main-header'>
          <h1 >Current<div className = 'circle-about'></div> <br/><span>Projects</span></h1>

        </div>


        <div className = 'card-cotainer'>
        <div class = 'card'>
        <div class = 'face'>
          <div class='face1'>
          <div class = "content1">
            <img src = {dna}/>
            <h3>Computational Biology</h3>
            </div>
          </div>

          <div class='face2'>
            <div class = 'content'>
              <p>Lorem Ipsum is simply dummy text of
               the printing and typesetting industry. L
               orem Ipsum has been the industry's
               standard dummy text ever since the 1500s,
              ions of Lorem Ipsum.</p>
              <a href='#'>GitHub</a>
            </div>
            </div>
            </div>
          </div>
          <div class = 'card'>
          <div class = 'face'>
            <div class='face1'>
            <div class = "content1">
              <img src = {unity}/>
              <h3>Musical Visualization</h3>
              </div>
            </div>

            <div class='face2'>
              <div class = 'content'>
                <p>Lorem Ipsum is simply dummy text of
                 the printing and typesetting industry. L
                 orem Ipsum has been the industry's
                 standard dummy text ever since the 1500s,
                ions of Lorem Ipsum.</p>
                <a href='#'>Github</a>
              </div>
              </div>
              </div>
            </div>
            <div class = 'card'>
            <div class = 'face'>
              <div class='face1'>
              <div class = "content1">
                <div class = "react">
                <img class = "react" src = {react}/>
                </div>
                <h3>Desgn</h3>
                </div>
              </div>

              <div class='face2'>
                <div class = 'content'>
                  <p>Lorem Ipsum is simply dummy text of
                   the printing and typesetting industry. L
                   orem Ipsum has been the industry's
                   standard dummy text ever since the 1500s,
                  ions of Lorem Ipsum.</p>
                  <a href='#'>GitHub</a>
                </div>
                </div>
                </div>
              </div>


        </div>
        <hr/>
      </div>
    )
  }



}
export default About;
