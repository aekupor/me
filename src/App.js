import React, { Component } from 'react';
import './App.css';
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div>
  			<Introduction></Introduction>
        <About></About>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
