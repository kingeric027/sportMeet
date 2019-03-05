import React, { Component } from "react";
import Geocode from "react-geocode";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import Map from "../../components/Map2";
import API from "../../utils/API";
import auth0Client from "../../Auth/authentication";



class Start extends Component {
    state = {
        formToggle:0,  //The formToggle allows users to switch between input form and map with next/back button
        sport:"",
        skill:"",
        playerAmount:"",
        date:"",
        time:"",
        user: "Anonymous", 
        address:"",
        location:{
            lat: "",
            lng: ""
        }
    }

    // Can we add function to get local position here and pass it in as a prop?
    getLocal = () => {

    }

    toggle = event =>{
        if(event.target.id === "next"){  //Go to map
            this.setState({
                formToggle:1
            })
        } else if(event.target.id === "back"){  //Go back to form
            this.setState({
                formToggle:0
            })
        }
    }

    //function for submitting the data (still needs to be done)
    onSubmit = () => {
        console.log("submit");
        
        const data = {
            sport: this.state.sport,
            skill: this.state.skill,
            players: this.state.playerAmount,
            time: this.state.time,
            date: this.state.date,
            location: this.state.location,
            address: this.state.address,  
            user: this.state.user
            
        }
        console.log(data);
        API.saveGame(data);
        //window.location.href = '/find';

    };

    //Function for updating the state as the dropdowns are updated
    handleInputChange = event => {
        console.log(event);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    onMapChange = (newlat, newlng, addr) => {
        this.setState({
            location: {
                lat: newlat,
                lng: newlng
            },
            address: addr
        })
    }

 /*   componentDidMount(){
        if(auth0Client.getProfile()){
            this.setState({
                user: auth0Client.getProfile().name
            })
        } else {
            auth0Client.signIn();
        }
    };  */

    render(){
        return (
        <div>
            <Navbar></Navbar>
            <div className = "container">
                <h1>Start a Game</h1>
            
            {this.state.formToggle===0 ?(
                <form>
                <label for="spprt">Sport: </label>
                <select name = "sport" id = "selectSport" onChange = {this.handleInputChange}>
                    <option value="Basketball">Basketball</option>
                    <option value="Football">Football</option>
                    <option value="Soccer">Soccer</option>
                    <option value="Hockey">Hockey</option>
                    <option value="Tenis">Tenis</option>
                    <option value="Ultimate Frisbee">Ultimate Frisbee</option>
                </select>

            <label for="skill">What is your groups overall skill level?</label>
                <select name = "skill" id = "selectSkill" onChange = {this.handleInputChange}>
                    <option value="1">1 Beginner</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 Expert</option>
                </select>

            <label for="playerAmount">What is the maximum number of players you can add to your game?</label>
                <select name = "playerAmount" id = "playerAmount" onChange = {this.handleInputChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">5</option>
                    <option value="8">6</option>
                </select>
            
            <div>
                Time: <input name="time" type="time" id="time" onChange = {this.handleInputChange}></input>
            </div>

            <div>
                Date: <input name="date" type = "date" id="date" onChange = {this.handleInputChange}></input>
            </div>

            <div>
                <button id = "next" onClick = {this.toggle}>Next</button>
            </div>
            </form>
            ) : (
                <div>
                <h5>Where are you playing?</h5>
                <div id = "mapDiv">
                <Map
                    google = {this.props.google}
                    center = {{lat: 44.9740, lng: -93.227}}
                    height = '300px'
                    zoom = {12}
                    dragMarker = {true}
                    onMapChange ={this.onMapChange}
               /> 
                </div>
                <button id = "back" onClick = {this.toggle}>Back</button>
                <button type="button" class="btn btn-primary btn-lg btn-block" onClick = {this.onSubmit}>Submit</button>
                </div>
            )}
        
                
            </div> 
            
        </div>
        )
    }
}

export default Start;