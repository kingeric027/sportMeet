import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">SportMeet</h1>
                    <p className="lead">The App for connecting people who play sports.</p>
                </div>
            </div>

            <div className = "container">
            <Link to = "/start">
            <button type="button" className="btn btn-primary btn-lg btn-block">Start a game</button>
            </Link>
           
            <Link to = "/find">
            <button type="button" className="btn btn-primary btn-lg btn-block">Find a game</button>
            </Link>
            </div>
        </div>
        )
    }
}

export default Home;