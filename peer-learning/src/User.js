import firebase from "./firebase.js"
import React, { Component } from "react";

export default class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            group_name: '',
            leader: '',
            member1: ' ',
            member2: ' ',
            member3: ' ',
            member4: ' '
        }
    }

    

    getStudyGroup() {
        firebase.database().ref('/study_groups/-MWsGPC4LsbLSSDcytli').on('value', querySnapShot => {
            const group_name = querySnapShot.val().group_name;
            const leader = querySnapShot.val().leader;
            const member1 = querySnapShot.val().member1;
            const member2 = querySnapShot.val().member2;
            const member3 = querySnapShot.val().member3;
            const member4 = querySnapShot.val().member4;
            this.group_name = group_name;
            this.leader = leader;
            this.member1 = member1;
            this.member2 = member2;
            this.member3 = member3;
            this.member4 = member4;
            this.setState({group_name})

          });
      }

    render() {
        let group_name = this.state.group_name;
        let leader = this.state.leader;
        let member1 = this.state.member1;
        let member2 = this.state.member2;
        let member3 = this.state.member3;
        let member4 = this.state.member4;
        return (

            <div className = "dashboard">
            <h1>Dashboard</h1>
            <div>
                <h3>Group A</h3>
                <p>Leader: im620</p>
                <p>Member 1: rjh100</p>
                <p>Member 2: zm520</p>
                <p>Member 3: ishita</p>
                <p>Member 4: rjh120</p>
                <h3>Group B</h3>
                <p>Leader: im620</p>
                <p>Member 1: rjh100</p>
                <p>Member 2: zm520</p>
                </div>
            </div>
        );
    }
}


//added forgot password to switch case