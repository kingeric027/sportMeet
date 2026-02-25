import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth0Client from "../../Auth/authentication";
import "./style.css";
import PrimaryButton from "../../components/shared/PrimaryButton";

class Home extends Component {
  componentDidMount() {
    if (!auth0Client.isAuthenticated()) {
      auth0Client.signIn();
    }
  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <img
              src="../img/sportMeet_logo.png"
              alt="sportMeet logo"
              id="logo_home"
            ></img>
            <p className="lead">
              The App for connecting people who play sports.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="mb-2">
            <Link to="/start">
              <PrimaryButton label="Start a game" size="large" block />
            </Link>
          </div>

          <Link to="/find">
            <PrimaryButton label="Find a game" size="large" block />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
