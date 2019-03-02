import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Start from "./pages/start/index";
import Find from "./pages/find/index";
import Callback from './pages/callback/index';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path = '/callback' component={Callback}/>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/start" component = {Start} />
            <Route exact path = "/find" component = {Find} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
