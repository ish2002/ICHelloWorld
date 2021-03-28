import {Link} from "react-router-dom";
import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="outer">
          <h1>Welcome To Peer Learning @ Imperial College London!</h1>
        </div>
        <div className="App">
              <a className="message">First time? Sign up with your Imperial email address</a>
              <Link to="/sign-up">
              <button type="Sign up" className="btn btn-dark btn-lg btn-block">Sign up</button>
              </Link>
              <Link to="/sign-in">
              <a className="message">Already registered? Sign in</a>
              <button type="Sign in" className="btn btn-dark btn-lg btn-block">Sign in</button>
              </Link>
        </div>
      </div>
    );
  }
}
