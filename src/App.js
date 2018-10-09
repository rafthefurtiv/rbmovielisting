import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Content from "./content";
import Home from "./home";
import Search from "./search";
import { FaSearchengin } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


class App extends Component {
  render() {
    return (
      <div className="mainDiv">               
<Router>
        <div className="navBar">
        <Route exact path="/home" component={Home} />
        <Route exact path="/content" component={Content} />
        <Route exact path="/search" component={Search} />
        
        <ul className="navBar">
        <li>
          <Link to="/search"><FaSearchengin size="50px"/></Link>
        </li>
        <li>
          <Link to="/home"><FaStar size="50px"/></Link>
        </li>
        <li>
          <Link to="/home"><FaHome size="50px"/></Link>
        </li>
      </ul>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
