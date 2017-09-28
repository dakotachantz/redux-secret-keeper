import React, { Component } from "react";

export default class RegisterForm extends Component {
  render() {
    return (
      <form className="container" style={{ marginTop: "2em", width: "60%" }}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            id=""
            aria-describedby=""
            placeholder="Enter Full Name"
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="">Textarea</label>
          <textarea className="form-control" id="" rows="3" />
        </div>
        <button type="submit" className="btn btn-success">
          Sign Up!
        </button>
      </form>
    );
  }
}
