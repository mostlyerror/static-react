import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Post from './Post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/">Home</Link>
          <Link to="/post/">Post</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/" component={Post} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
