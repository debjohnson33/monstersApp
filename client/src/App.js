import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Auth from './modules/Auth';
import MonsterList from './components/MonsterList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({
        user: data
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        });
      }).catch(err => {
        console.log(err);
      })
  }

  handleLoginSubmit(e, data) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        Auth.authenticateToken(res.token);
        this.setState({
          auth: Auth.isUserAuthenticated(),
        });
      }).catch(err => console.log(err));
  }

  handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        token: Auth.getToken(),
        'Authorization': `Token ${Auth.getToken()}`
      }
    }).then(res => {
      Auth.deauthenticateUser();
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div className="nav">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/dash">Dash</Link>
          <Link className="link" to="/monsters">Monsters</Link> 
          <span onClick={this.handleLogout}>Logout</span>       
        </div>
          <Route exact path="/monsters" render={() => <MonsterList />} />
          <Route 
            exact path="/register" 
            render={() => (this.state.auth)
              ? <Redirect to="/dash" />
              : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit} /> } 
          />
          <Route 
            exact path="/login"
            render={() => (this.state.auth)
              ? <Redirect to="/dash" />
              : <LoginForm handleLoginSubmit={this.handleLoginSubmit} /> }
          />
          <Route
            exact path="/dash"
            render={() => <Dashboard />}
          />  
        </div>
      </Router>

    );
  }
}

export default App;
