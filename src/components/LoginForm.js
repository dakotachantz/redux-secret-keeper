import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="container" style={{ marginTop: "2em", width: "60%" }}>
        <div className="form-group">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            className="form-control"
            id=""
            aria-describedby=""
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            id=""
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Log In!
        </button>
      </form>
    );
  }
}
