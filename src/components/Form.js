import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
        }


    }

    updateValueFor(fieldName, newValue) {
        console.log(this.state);

    }

    render() {
        const { onSubmit, formState, updateState } = this.props;
        // console.log(state);
        return (
            <div>
                <form onSubmit={onSubmit}>
                    Personal Information <br />
                    <label>
                        First Name
                        <input
                            onChange={(e) => this.updateValueFor("firstName", e.target.value)}
                            value={formState.firstName}
                            type="text"
                            name="firstName"
                        />
                    </label>
                    <br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;