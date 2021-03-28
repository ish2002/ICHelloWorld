import React, { Component } from "react";
import firebase from "../firebase.js"

export default class NewStudyGroup extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            group_name : '',
            leader : '',
            member1 : null,
            member2 : null,
            member3 : null,
            member4 : null,
            member5 : null,
            state : true,
            result :  ''
        }
    }

    // user typed in a field
    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    handleMemberEmail(shortcode) {
        firebase.database().ref('/users/' + shortcode).on('value', (snapshot) => {
            if(!snapshot.exists()) {
                this.state.state = false
            }
        })
    }

    // enter group details 
    handleSubmit(event) {
        event.preventDefault()
        const shortcode1 = this.state.member1.substring(0, this.state.member1.indexOf('@'))
        const shortcode2 = this.state.member2.substring(0, this.state.member2.indexOf('@'))
        const shortcode3 = this.state.member3.substring(0, this.state.member3.indexOf('@'))
        const shortcode4 = this.state.member4.substring(0, this.state.member4.indexOf('@'))
        const shortcode5 = this.state.member5.substring(0, this.state.member5.indexOf('@'))
        this.handleMemberEmail(shortcode1)
        this.handleMemberEmail(shortcode2)
        this.handleMemberEmail(shortcode3)
        this.handleMemberEmail(shortcode4)
        this.handleMemberEmail(shortcode5)
        if(this.state.state === true) {
                const groupInfo = {
                    group_name : this.state.group_name,
                    leader : this.state.leader,
                    member1 : this.state.member1,
                    member2 : this.state.member2,
                    member3 : this.state.member3,
                    member4 : this.state.member4,
                    member5 : this.state.member5
                }
                firebase.database().ref('/study_groups/').push(groupInfo);
        }
        // writes data to user database
    }
    

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>

                <h3>Register</h3>

                <div className="form-group">
                    <label>Study Group Name</label>
                    <input name="group_name" type="text" className="form-control" placeholder="Study Group Name" value={this.state.group_name} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Group Leader</label>
                    <input name="leader" type="email" className="form-control" placeholder="Group Leader" value={this.state.leader} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Member 1</label>
                    <input name="member1" type="email" className="form-control" placeholder="Member 1" value={this.state.member1} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Member 2</label>
                    <input name="member2" type="email" className="form-control" placeholder="Member 2" value={this.state.member2} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Member 3</label>
                    <input name="member3" type="email" className="form-control" placeholder="Member 3" value={this.state.member3} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Member 4</label>
                    <input name="member4" type="email" className="form-control" placeholder="Member 4" value={this.state.member4} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Member 5</label>
                    <input name="member5" type="email" className="form-control" placeholder="Member 5" value={this.state.member5} onChange={this.handleChange} />
                </div>

                <p>{this.state.result}</p>
            </form>
        );
    }
}