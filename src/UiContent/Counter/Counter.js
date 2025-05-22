import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 2 };
  }

  handleEvent = (value) => {
    this.setState((prevState) => ({
      counter: prevState.counter + value,
    }));
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleEvent(1)}>+1</button>
        <button onClick={() => this.handleEvent(-1)}>-1</button>
        <button onClick={() => this.handleEvent(2)}>+2</button>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.handleEvent(-2)}>-2</button>
        <button onClick={() => this.handleEvent(5)}>+5</button>
        <button onClick={() => this.handleEvent(-5)}>-5</button>
      </>
    );
  }
}

export default Counter;
