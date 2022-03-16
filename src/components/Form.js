import React, { Component } from 'react';

const DEFAULT_PERSON = {
    firstName: "",
    lastName: "",
};

class PersonEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...(props.currentPerson ?? DEFAULT_PERSON)
        };
    }

    submit(e) {
        this.props.onSubmit(this.state);
        e.preventDefault();
        this.clearForm();
    }

    clearForm() {
        this.setState({ ...DEFAULT_PERSON });
    }

    edit() {
        this.setState({ ...this.props.currentPerson });
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                    Personal Information <br />
                    <label>
                        First Name
                        <input
                            onChange={(e) => this.setState({ firstName: e.target.value })}
                            value={firstName}
                            type="text"
                            name="firstName"
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            onChange={(e) => this.setState({ lastName: e.target.value })}
                            value={lastName}
                            type="text"
                            name="lastName"
                        />
                    </label>
                    <br />
                    <button type="submit">
                        Submit
                    </button>
                    <button type="button" onClick={() => this.edit()}>
                        Edit
                    </button>
                </form>
            </div>
        )
    }
}

export default PersonEntry;