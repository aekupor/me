import React, { Component } from 'react'
import '../css/project.css'
import '../css/buttons.css'
import logo from '../logo.svg'

export default class Projects extends Component {
  //open github
  viewMoreProjects() {
    const url = 'https://github.com/aekupor';
    window.open(url, '_blank');
  }

  render() {
    return (
      <div>
        <div>
          <h2>My projects</h2>
        </div>

        <div class="row">

          <div class="column">
            <div class="card">
              <img class="logo" src={logo} alt="Logo" />
              <div class="container">
                <h4><b>Project 1</b></h4>
                <p>More about project</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img class="logo" src={logo} alt="Logo" />
              <div class="container">
                <h4><b>Project 2</b></h4>
                <p>More about project</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img class="logo" src={logo} alt="Logo" />
              <div class="container">
                <h4><b>Project 3</b></h4>
                <p>More about project</p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <img class="logo" src={logo} alt="Logo" />
              <div class="container">
                <h4><b>Project 4</b></h4>
                <p>More about project</p>
              </div>
            </div>

          </div>

        </div>

        <div>
          <button class="buttons" onClick={this.viewMoreProjects}>
            View more projects
          </button>
        </div>

      </div>
    )
  }
}
