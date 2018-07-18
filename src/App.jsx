import React, { Component } from 'react';
import './App.scss';
import Containers from './containers';
import { Provider } from 'react-redux'
import store from 'src/store/index.js'
import {
  BrowserRouter as Router
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Containers />
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
