import React, { Component } from "react";
import NavBar from "./Navbar";
import './sample.css';

export default class Sample extends Component {
    render() {
        return (<div>
                <NavBar/>
                <div id="mainPage">
                    <p>Hello</p>
                </div>
                </div>
        );
    }
}