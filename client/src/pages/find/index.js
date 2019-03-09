
import React, { Component } from "react";
import { Link } from "react-router-dom" ;
import {Row, Col, Container} from "../../components/Grid";
import API from "../../utils/API";
import Navbar from "../../components/navbar/index";
import Map from "../../components/findMap";
import {GameList, GameListItem} from '../../components/gameItem';
import auth0Client from "../../Auth/authentication";

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
        API.getFutureGames()
        .then(res => this.setState( {games:res.data} ))
        .catch(err => console.log(err));
    }

    deleteGame = id => {
        console.log("DELETE REQUEST")
        API.deleteGame(id)
        .then(res => this.loadGames())
        .catch(err => console.log(err));
    }


    updateGame = index => {
        if(!auth0Client.isAuthenticated()){  //If not logged in make user log in before joining game.
            auth0Client.signIn();
        }
        const gameToChange = this.state.games[index];
        console.log(gameToChange);
        gameToChange.players = gameToChange.players - 1;
        gameToChange.playersArray.push( auth0Client.getProfile().name )
        console.log("new players: " + gameToChange.players);
        console.log("playersArray: "+ gameToChange.playersArray);
        API.updateGame(gameToChange._id, gameToChange)
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
                            id = {game._id}
                            user = {game.user}
                            sport = {game.sport}
                            players = {game.players}
                            time = {game.time}
                            date = {game.date}
                            address = {game.address}
                            coords = {game.location}
                            DeleteFunction = {() => this.deleteGame(game._id)}
                            JoinFunction = {() => this.updateGame(index)} //Need to decrease players by one
                            >
                            </GameListItem>

                        )
                    })}
                </GameList>
                <div>
                    <Map
                    gamesArray = {this.state.games }
                    google = {this.props.google}
                    center = {{lat: 44.9740, lng: -93.227}}
                    height = '300px'
                    zoom = {12}
                    >
                    
                    </Map>
                </div>
            </Container>
        </div>
        )
    }
}

export default Find;