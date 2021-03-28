import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./general/Home";
import Login from "./general/login";
import SignUp from "./general/signup";
import ForgotPassword from "./general/forgotpassword";
import GroupStudy from './general/groupstudy';
import NewStudyGroup from './general/newstudygroup';
import ExistingStudyGroup from './general/existingstudygroup';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>IC Peer Learn</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home" component={HomePage} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/groupstudy" component={GroupStudy} />
            <Route path="/newstudygroup" component={NewStudyGroup} />
            <Route path="/existingstudygroup" component={ExistingStudyGroup} />
          </Switch>
        </div>
      </div>
      </div></Router>
  );
}
//added forgot password to switch case
//added new study group to switch case
export default App;