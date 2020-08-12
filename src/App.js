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
<<<<<<< HEAD
        <section id="home"> <Introduction /></section>
=======
  			<section id="home"> <Introduction /></section>
>>>>>>> 88b64fc15b161dd5f2f106e13f6068337349e0cd
        <section id="about"> <About /></section>
        <section id="projects"> <Projects /></section>
      </div>
    );
  }
}

export default App;
