import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Signup from "./components/auth/Signup";

import AuthService from "./components/auth/auth-service";

// NAVBAR
import Navbar from "./components/navbar/Navbar";

// EVENT LIST
import EventList from "./components/events/EventList";

// EVENT DETAILS
import EventDetails from "./components/events/EventDetails";

import Login from "./components/auth/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getTheUser={this.getTheUser}/>
          <Switch>
            <Route exact path="/events" component={EventList} />
            <Route exact path="/events/:id" component={EventDetails} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch>
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route exact path="/events" component={EventList} />
            <Route exact path="/events/:id" component={EventDetails} />
          </Switch>
        </div>
      );
    }
  }
}
export default App;
