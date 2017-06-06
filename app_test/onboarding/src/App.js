import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './containers/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />  
      </div>
    );
  }
}

export default App;
