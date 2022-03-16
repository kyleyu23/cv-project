import React, { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: "",
        lastName: "",
      },
      display: {
        firstName: "",
        lastName: "",
      },
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      display:
      {
        ...this.state.form,
      },
      form: {
        firstName: "",
        lastName: "",
      }
    })
  }



  edit = (e) => {
    e.preventDefault();
    this.setState({
      form: {
        firstName: this.state.display.firstName,
        lastName: this.state.display.lastName,
      }
    })
  }

  handleUpdate = (newFirstName) => {
    this.setState({
      form: {
        firstName: newFirstName,
      }
    })
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          formState={this.state.form}
          updateState={this.handleUpdate}
        />
      </div >
    )
  }
}
export default App;

