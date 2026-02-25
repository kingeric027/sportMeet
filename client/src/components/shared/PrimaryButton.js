import React, { Component } from "react";
import "./style.css";

class PrimaryButton extends Component {
  render() {
    let className = "btn custom-btn";
    if (this.props.size === "large") {
      className += " btn-lg";
    }

    if (this.props.block) {
      className += " btn-block";
    }

    return (
      <button
        className={className}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.label}
      </button>
    );
  }
}

export default PrimaryButton;
