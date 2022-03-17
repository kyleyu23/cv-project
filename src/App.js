import React, { Component } from "react";
import PersonEntry from "./components/PersonEntry";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
    };

  }

  handleSubmit(person) {
    this.setState({ person });
  }

  render() {
    return (
      <div>
        <PersonEntry
          onSubmit={(person) => this.handleSubmit(person)}
          currentPerson={this.state.person}
        />
      </div >
    )
  }
}
export default App;

