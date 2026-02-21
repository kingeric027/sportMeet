import React, { Component } from "react";

class InfoForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="sport">What sport are you playing?</label>
                    <select className="form-control" id="sport" onChange = {this.props.handleInputChange} value={this.props.sport}>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Hockey">Hockey</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Ultimate Frisbee">Ultimate Frisbee</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for = "skill">What is your groups overall skill level?</label>
                    <select className="form-control" id="skill" onChange = {this.props.handleInputChange} value={this.props.skill}>
                        <option value="1">1 Beginner</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 Expert</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="players">How many players are you looking for?</label>
                    <select className="form-control" id="players" onChange = {this.props.handleInputChange} value={this.props.players}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="time">What time are you playing?</label>
                    <input type="time" className="form-control" id="time" onChange = {this.props.handleInputChange} value={this.props.time}></input>
                </div>
                <div className="form-group">
                    <label for="date">What date are you playing?</label>
                    <input type="date" className="form-control" id="date" onChange = {this.props.handleInputChange} value={this.props.date}></input>
                </div>            
            </form>
        )
    }
}

export default InfoForm;