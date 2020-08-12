import React, { Component } from 'react'
import '../css/navbar.css'

export default class MyNavbar extends Component{
  render() {
      return (
        <div class = "navbar">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      );
    }
}
