import React, { Component } from "react";

import "./index.css";
import "./Home.js";
import "./Login.js";
import "./Contact.js";
import "./register.js";


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import register from "./register";
import Login from "./Login.js";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>VECHILE RENTAL SYSTEM</h1>
          <ul class="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/register">register</NavLink></li>
          </ul>
          <div class="content">
          <Route path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/register" component={register}/>
             
          </div>
        </div>
        </HashRouter>
     
    );
  }
}

 
export default Main;