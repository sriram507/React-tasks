import React, { Component } from "react";

class ClassTimer extends Component {
  componentWillUnmount() {
    console.log("ClassTimer is removed from screen!");
  }

  render() {
    return <h2>⏳ Class Component Timer</h2>;
  }
}

export default ClassTimer;
