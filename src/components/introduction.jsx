import React, { Component } from 'react'
import '../css/buttons.css'
import Resume from '../images/Resume.pdf';

export default class Introduction extends Component {

  render() {
    return (
      <div>
        <h1>Hi! <br />I'm Ashlee</h1>
        <h1>I love building<br /> THINGS !!</h1>

        <a href={Resume} class="buttons" download="Ashlee_Kupor_Resume">Download Resume</a>
      </div>
    )
  }
}
