import React, { Component } from "react";
import PersonsList from "../components/PersonsList";

import "./App.css";

class App extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ persons: users }));
  }
  render() {
    return (
      <div>
        <h1 className="tc">Personal List</h1>
        <PersonsList personsArray={this.state.persons} />
      </div>
    );
  }
}
export default App;
