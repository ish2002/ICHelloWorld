import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase.js"

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRequestEmail = this.handleRequestEmail.bind(this)
        this.state = {
            email: '',
            result: ' '
        }
    }

    // user typed in a field
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }
    
    // submit button pressed
    handleRequestEmail(event) {
        event.preventDefault()
    
        const { email } = this.state
        const shortcode = email.substring(0, email.indexOf('@'))
    
            // email is the primary key of user database
        firebase.database().ref('/users/' + shortcode).on('value', (snapshot) => {
            // checks if there is an account with this email
            if (snapshot.exists()) {
                // checks if email is correct
                const mail = snapshot.val().email;
                //const pass = snapshot.val().password;
                if (email === mail) {
                    // redirects to home page
                    this.setState({result : "An email has been sent to you!"})
                    this.props.history.push("/sign-in")
                } else {
                    // error message
                    this.setState({result :  "Incorrect email"})
                }
            }
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleRequestEmail}>

                <h3>Reset Password</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Send reset link</button>
                <p className="sign-in text-right">
                <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                </p>

                <p>{this.state.result}</p>
            </form>
        );
    }
}