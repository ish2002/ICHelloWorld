import {Link} from "react-router-dom";

export function HomePage() {
    return (
      <div>
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/"}>IC Peer Learn</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
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
          <h1>Welcome To Peer Learning @ Imperial College London!</h1>
        </div>

        <div className="App">
              <p>First time? Sign up with your Imperial email address</p>
              <Link to="/sign-up">
              <button type="Sign up" className="btn btn-dark btn-lg btn-block">Sign up</button>
              </Link>
              <Link to="/sign-in">
              <p>Already registered? Sign in</p>
              <button type="Sign in" className="btn btn-dark btn-lg btn-block">Sign in</button>
              </Link>
        </div>
      </div>
      </div>
    );
  }