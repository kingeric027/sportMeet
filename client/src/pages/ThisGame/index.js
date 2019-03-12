import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container} from "../../components/Grid";
import API from "../../utils/API";
import Navbar from "../../components/navbar/index";
import Comment from "../../components/comments/index";
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

    handleComment = () =>{
        
    }

    render(){
        return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h3>{this.state.game.user}'s {this.state.game.sport} game</h3>
                <h5>{moment(this.state.game.date).format("MMM Do YYYY")}, {this.state.game.time}</h5>
                <h5>{this.state.game.address}</h5>
                <p>Skill Level: {this.state.game.skill}</p>
                <p>Players: {this.state.game.playersArray}</p>
                <Comment></Comment>
                
            </Container>
        </div>
        )
    }
}

export default ThisGame;