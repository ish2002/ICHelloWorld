import React, { Component } from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
        <div id="navDiv">
          <div id="navTop">
            <h3 class = "comp, top">Username</h3>
            <h4 class = "comp, top">I am working on:</h4>

          </div>
            <div id="navMiddle">
                <Link to="/" class="comp">Home</Link>
                <Link to="/" class="comp">My Study Groups</Link>
              <Link to="/" class="comp">Find Past Papers</Link>
                <Link to="/" class="comp">Find Exam Questions</Link>
            </div>
            <div id="navBottom">
                <Link to="/" class="comp">Logout</Link>
            </div>
          </div>
        );
    }
}


