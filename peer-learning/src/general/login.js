
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../firebase.js"

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            email: '',
            password: '',
            result: ' '
        }
    }

    // user typed in a field
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    // submit button pressed
    handleSubmit(event) {
        event.preventDefault()

        const { email, password } = this.state
        const shortcode = email.substring(0, email.indexOf('@'))

        // email is the primary key of user database
        firebase.database().ref('/users/' + shortcode).on('value', (snapshot) => {
            // checks if there is an account with this email
            if (snapshot.exists()) {
                // checks if email and password is correct
                const mail = snapshot.val().email;
                const pass = snapshot.val().password;
                if (password === pass && email === mail) {
                    // redirects to home page
                    this.setState({result : "Login successful!"})
                    this.props.history.push("/groupstudy")
                } else {
                    // error message
                    this.setState({result :  "Incorrect email or password."})
                }
            }
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>

                <h3>Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                    <Link className="nav-link" to="/groupstudy">Sign in</Link>
                </button>
                <p className="forgot-password text-right">
                    <Link className="nav-link" to="/forgotpassword">Forgot Password</Link>
                </p>

                <p>{this.state.result}</p>
            </form>
        );
    }
}
//up to date