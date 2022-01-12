import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   inputText: " ",
    // };
  }

  changeHandler = (inputText) => {
    this.props.setInputText(inputText);
  };

  render() {
    return (
      <div>
        <p>This is a Class Component {this.props.inputText}</p>
        <input onInput={(e) => this.changeHandler(e.target.value)} />
      </div>
    );
  }
}
