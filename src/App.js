import React, { Component } from "react";
import "./styles/App.css";
import {
  BaseLayout,
  Home,
  LoginForm,
  RegisterForm,
  Logout
} from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
