import React, { Component } from 'react'
import '../css/project.css'
import logo from '../logo.svg'

export default class Projects extends Component {
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
      </div>
    )
  }
}
