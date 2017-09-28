import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-faded">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <NavLink className="navbar-brand" to="/">
          Redux Secret Keeper
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
            <div className="nav-buttons">
              <NavLink className="nav-item btn btn-primary" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item btn btn-danger" to="/logout">
                Log Out
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
