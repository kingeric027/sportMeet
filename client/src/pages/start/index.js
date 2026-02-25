import React, { Component } from "react";
import Navbar from "../../components/navbar/index";
import API from "../../utils/API";
import auth0Client from "../../Auth/authentication";
import moment from "moment";
import "./style.css";
import InfoForm from "./InfoForm";
import FormFooter from "./FormFooter";
import Map from "../../components/maps/Map";

class Start extends Component {
  state = {
    formToggle: 0,
    sport: "Basketball",
    skill: "1",
    players: "1",
    playersArray: [],
    date: "",
    time: "",
    user: "Anonymous",
    address: "",
    location: {
      lat: "",
      lng: "",
    },
    comments: [],
  };

  onNext = () => {
    this.setState({
      formToggle: this.state.formToggle + 1,
    });
  };

  onBack = () => {
    this.setState({
      formToggle: this.state.formToggle - 1,
    });
  };

  onSubmit = () => {
    const data = {
      sport: this.state.sport,
      skill: this.state.skill,
      players: this.state.players,
      playersArray: this.state.playersArray,
      time: moment(this.state.time, "HH:MM A").format("h:MM A"),
      date: this.state.date,
      location: this.state.location,
      address: this.state.address,
      user: this.state.user,
      comments: this.state.comments,
    };
    API.saveGame(data);
  };

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  onMapChange = (newlat, newlng, addr) => {
    this.setState({
      location: {
        lat: newlat,
        lng: newlng,
      },
      address: addr,
    });
  };

  componentDidMount() {
    if (auth0Client.getProfile()) {
      this.setState({
        user: auth0Client.getProfile().name,
      });
    } else {
      auth0Client.signIn();
    }
  }

  nextDisabled() {
    const disabled =
      !this.state.sport ||
      !this.state.skill ||
      !this.state.players ||
      !this.state.time ||
      !this.state.date;
    return disabled;
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="startHeader">Start a Game</h3>
          <br></br>
          {this.state.formToggle === 0 ? (
            <div>
              <InfoForm
                handleInputChange={this.handleInputChange}
                sport={this.state.sport}
                skill={this.state.skill}
                players={this.state.players}
                time={this.state.time}
                date={this.state.date}
              />
            </div>
          ) : (
            <div>
              <h5>Where are you playing?</h5>
              <div>
                <Map
                  google={this.props.google}
                  center={{ lat: 44.974, lng: -93.227 }}
                  height="300px"
                  zoom={12}
                  dragMarker={true}
                  onMapChange={this.onMapChange}
                />
              </div>
            </div>
          )}
          <div className="footer-container">
            <FormFooter
              onNext={this.onNext}
              onBack={this.onBack}
              onSubmit={this.onSubmit}
              formToggle={this.state.formToggle}
              nextDisabled={this.nextDisabled()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Start;
