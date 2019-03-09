import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container} from "../../components/Grid";
import API from "../../utils/API";
import Navbar from "../../components/navbar/index";
import Map from "../../components/findMap";
import moment from 'moment';

class ThisGame extends Component {
    state = {
        game:{}
    };

    componentDidMount(){
        console.log("Game ID: "+this.props.match.params.id)
        API.getGame(this.props.match.params.id)   //Need to pass in the ID
        .then(res => this.setState( {game:res.data} ))
        .catch(err => console.log(err));
        console.log("State: "+this.state.games)
    }

    updateGame = index => {
        const gameToChange = this.state.games[index];
        console.log(gameToChange);
        gameToChange.players = gameToChange.players - 1;
        console.log("new players: " + gameToChange.players);
        API.updateGame(gameToChange._id, gameToChange)
            .then(res => this.loadGames())
            .catch(err => console.log(err));
    }

    render(){
        return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h3>{this.state.game.user}'s {this.state.game.sport} game</h3>
                <h5>{this.state.game.date}, {this.state.time}</h5>
                <h5>{this.state.game.address}</h5>
                <p>Skill Level: {this.state.game.skill}</p>
                
            </Container>
        </div>
        )
    }
}

export default ThisGame;