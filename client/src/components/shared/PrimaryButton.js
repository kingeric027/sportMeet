import React, { Component } from "react";

class PrimaryButton extends Component {

    render() { 
        return (
            <button className="btn btn-primary" onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.label}</button>
        )
    }
 }

 export default PrimaryButton;