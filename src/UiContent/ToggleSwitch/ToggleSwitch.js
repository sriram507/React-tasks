import React, { Component } from "react";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;

    const messageStyle = {
      color: isVisible ? "green" : "red",
    };

    const buttonStyle = {
      backgroundColor: isVisible ? "green" : "red",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "16px",
      borderRadius: "5px",
    };

    return (
      <>
        <button onClick={this.handleToggle} style={buttonStyle}>
          Click me
        </button>
        <h1 style={messageStyle}>
          {isVisible ? "Button is ON" : "Button is OFF"}
        </h1>
      </>
    );
  }
}

export default Toggle;
