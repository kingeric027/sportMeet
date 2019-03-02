
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Col, Container} from "../../components/Grid";
import API from "../../utils/API";
import Navbar from "../../components/navbar/index";
import {GameList, GameListItem} from '../../components/gameItem';

class Find extends Component {
    state = {
        games:[]
    };

    componentDidMount(){
        this.loadGames();
        console.log(this.state.games);
    }

    loadGames = () => {
        console.log("GET REQUEST")
        API.getGames()
        .then(res => this.setState( {games:res.data} ))
        .catch(err => console.log(err));
    }

    deleteGame = id => {
        console.log("DELETE REQUEST")
        API.deleteGame(id)
        .then(res => this.loadGames())
        .catch(err => console.log(err));
    }

    render(){
        return (
        <div>
            <Navbar></Navbar>
            <Container>
                <h1>Upcoming Games</h1>

                <GameList>
                    {this.state.games.map((game, index) =>{
                        return (
                            <GameListItem
                            key = {game._id}
                            sport = {game.sport}
                            players = {game.players}
                            time = {game.time}
                            date = {game.date}
                            address = {game.address}
                            >
                            </GameListItem>

                        )
                    })}
                </GameList>
            </Container>
        </div>
        )
    }
}

export default Find;