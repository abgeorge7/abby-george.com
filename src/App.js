import React from 'react';
import Home from './Home';
import About from './About';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
