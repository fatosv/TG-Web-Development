import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      title: " ",
    };
  }

  changeHandler = (text) => {
    this.setState({ title: text });
  };

  render() {
    return (
      <div>
        <p>this is a class</p>
        <input onInput={(e) => this.changeHandler(e.target.value)} />
        <p>{this.state.title}</p>
      </div>
    );
  }
}
