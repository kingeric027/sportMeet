import React, { Component } from "react";

class SecondaryButton extends Component {

    render() { 
        return (
            <button className="btn btn-secondary" onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.label}</button>
        )
    }
 }

 export default SecondaryButton;