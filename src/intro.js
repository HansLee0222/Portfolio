import React, {Component} from 'react';
import './intro.css'
class Intro extends React.Component {
  componentDidMount() {
      setTimeout(() => {
        this.props.history.push('/home')
      }, 4000) // render for 5 seconds and then push to home
    }
    render() {
      return(
        <div class = 'container1'>
          <div className = 'content10'>
            <span class='title1'>Hans Lee

            </span>
            <span class ='title2'>Portfolio</span>

          </div>
        </div>
      )
    }
  }

export default Intro;
