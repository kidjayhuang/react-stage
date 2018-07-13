import React, { Component } from 'react';
import './App.scss';

import Containers from './containers';

import {
  BrowserRouter as Router
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Containers />
        </Router>
      </div>
    );
  }
}

export default App;
