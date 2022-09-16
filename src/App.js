import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { useAuth0 } from "@auth0/auth0-react";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import Home from "./components/Home";
import Logoff from "./components/Logoff";
import { LoginWithRedirect, Logout, User, IsAuthenticated } from "./AuthFunction";
// import { useDispatch } from "react-redux";
// import { REPLACE_BEARER_TOKEN } from "./actions/types";


function App() {
  // const { getAccessTokenSilently } = useAuth0();

  // const dispatch = useDispatch();
  // let token;
  // setTokenSilently();
  // async function setTokenSilently() {
  //   try {
  //     token = token ? token : await getAccessTokenSilently();
  //     //getBearerToken(token);
  //     dispatch({
  //       type: REPLACE_BEARER_TOKEN,
  //       payload: token,
  //     });
  //     localStorage.setItem("token", token);
  //     return token;

  //   }
  //   catch (error) {
  //     console.log(error.message);
  //   }

  // }

  let Authenticated = IsAuthenticated();
  let userDetails = User();

  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {
              Authenticated ?
                <Link to={"/tutorials"} className="nav-link">
                  Tutorials
                </Link> :
                <Link to={"/logoff"} className="nav-link">
                  Tutorials
                </Link>
            }
          </li>
          <li className="nav-item">
            {
              Authenticated ?
                <Link to={"/add"} className="nav-link">
                  Add
                </Link> :
                <Link to={"/logoff"} className="nav-link">
                  Add
                </Link>
            }
          </li>
        </div>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {
              Authenticated ?
                <Link to={"/logoff"} onClick={Logout()} className="nav-link">
                  Logout
                </Link>
                :
                <Link to={"/"} onClick={LoginWithRedirect()} className="nav-link">
                  Login
                </Link>
            }
          </li>
          <li className="nav-item">

          </li>
        </div>

        <div className="navbar-nav mr-auto">
          <li className="nav-item welcome-note">
            {Authenticated ? "Welcome: " + userDetails.name + " !" : ""}
          </li>
        </div>


      </nav>


      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/logoff" component={Logoff} />
          <Route exact path={"/tutorials"} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>

    </Router >
  );
}

export default App;

