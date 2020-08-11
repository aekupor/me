import React, { Component } from 'react'
import '../css/project.css'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2>My projects</h2>

        <span className="project">This is my first project.</span>
        <span className="project">This is my second project.</span>
        <span className="project">This is my third project.</span>
      </div>
    )
  }
}
