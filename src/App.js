import React, { Component } from 'react';
import './App.css';
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
  			<section id="home"> <Introduction /></section>
        <section id="about"> <About /></section>
        <section id="projects"> <Projects /></section>
      </div>
    );
  }
}

export default App;
