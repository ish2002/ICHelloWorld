import React, { Component } from "react";
import './Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
        <div id="navDiv">
            <div id="navMiddle">
            <ul>
                <li>My study groups</li>
              <li>
                <Link to="/Home.js">Home</Link>
              </li>
              <li>
                <Link to="/">My Study Groups</Link>
              </li>
              <li>
                <Link to="/">Find Past Papers</Link>
              </li>
              <li>
                <Link to="/">Find Exam Questions</Link>
              </li>
            </ul>
            </div>
            <div id="navBottom">
                <Link to="/">Logout</Link>
            </div>
          </div>
        );
    }
}


