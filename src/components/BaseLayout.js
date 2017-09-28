import React, { Component } from "react";
import Nav from "./Nav";
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
