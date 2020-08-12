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
  			<Introduction />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
