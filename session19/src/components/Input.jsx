import React, { Component } from "react";

export default class Input extends Component {
  state = {
    sInputValue: "",
  };

  constructor() {
    super();

    this.sInputListener.bind(this);
  }

  sInputListener = (event) =>
    this.setState({ sInputValue: event.target.value });

  render() {
    return (
      <>
        <h1>{this.props.pName}</h1>
        <input type="text" onChange={this.sInputListener} />
        <p>{this.state.sInputValue}</p>
      </>
    );
  }
}
