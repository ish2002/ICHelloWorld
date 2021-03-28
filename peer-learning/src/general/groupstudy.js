import {Link} from "react-router-dom";
import React, { Component } from "react";

export default class GroupStudy extends Component {
    render() {
        return (
            <div className="Group">
              <a className="message">Want to get cracking?</a>
              <Link to="/newstudygroup">
              <button type="Create my own study group" className="btn btn-dark btn-lg btn-block">Create my own study group</button>
              </Link>
              <Link to="/existingstudygroup">
              <button type="Join my study buddies" className="btn btn-dark btn-lg btn-block">Join my study buddies</button>
              </Link>
            </div>
        );
    }
}