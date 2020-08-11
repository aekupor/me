import React, { Component } from 'react'
import '../css/buttons.css'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <h1>Hi! <br />I'm Ashlee</h1>
        <h1>I love building<br /> THINGS !!</h1>

        <div>
          <p>
            {
              //TODO: when click, says "Failed - no file"
            }
            <a href="./../images/Resume.pdf" class="button" download="Ashlee_Kupor_Resume">Download Resume</a>
          </p>
       </div>
       <button class="buttons">Hey There</button>
      </div>
    )
  }
}
