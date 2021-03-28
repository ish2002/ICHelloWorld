import React, { Component } from "react";
import firebase from "../firebase.js"

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            password : ''
        }
    }

    // user typed in a field
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    // submit button pressed
    handleSubmit(event) {
        event.preventDefault()

        const email = this.state.email
        const shortcode = email.substring(0, email.indexOf('@'))

        if (shortcode !== "") {
            // writes data to user database
            firebase.database().ref("/users/" + shortcode).set({
                firstname : this.state.firstname,
                lastname : this.state.lastname,
                email : email,
                password : this.state.password,
            })

            // redirects user to sign up page
            this.props.history.push("/sign-in")
        }
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>

                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input name="firstname" type="text" className="form-control" placeholder="First name" value={this.state.firstname} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input name="lastname" type="text" className="form-control" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">log in?</a>
                </p>
            </form>
        );
    }
}