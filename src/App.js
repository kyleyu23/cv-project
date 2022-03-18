import React, { Component } from "react";
import PersonEntry from "./components/PersonEntry";
import Resume from "./components/Resume";

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
      <div className="content">
        <PersonEntry
          onSubmit={(person) => this.handleSubmit(person)}
          currentPerson={this.state.person}
        />
        {this.state.person &&
          <Resume
            currentPerson={this.state.person}
          />
        }
      </div >


    )
  }
}
export default App;