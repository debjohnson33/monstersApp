import React, { Component } from 'react';
import './App.css';

import { BrowswerRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated()
    }
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
