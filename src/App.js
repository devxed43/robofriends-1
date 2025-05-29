import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./robots";

// props are things that come out of state
// parent feeds state into a child component
// child recieves state, it's a property
// parent tells it what the state is

class App extends Component {
  // this constructs our state
  // this constructs our searchchange
  //   this constructs all our functionality
  constructor() {
    // constructs state
    super(); // calls the constructor of component

    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  //   search box functionality
  // we check this.state.robots
  // we filter out and return robots name if they're found to be
  // included in the searchfield
  //   conclusion: if search field value matches robot array, return

  //   use arrow function so this function is scoped in the app and not confined to the input component
  onSearchChange = (e) => {
    // we set the state within the search change function

    // we destructure searchfield(key) object from above and give it a value of e.target.value
    this.setState({ searchfield: e.target.value });

    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
  };

  render() {
    return (
      <div className="tc">
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
