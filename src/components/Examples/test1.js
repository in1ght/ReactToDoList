import React, { Component } from "react";

export default class Test1 extends Component {
  render() {
    return (
      <div className={"App-header " +this.props.theme}>
        <h1 className='todo_text'>It Is Switching</h1>
      </div>
    );
  }
}