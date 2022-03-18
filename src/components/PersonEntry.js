import React, { Component } from 'react';
import '../styles/PersonEntry.css'

const DEFAULT_PERSON = {
    firstName: "John",
    lastName: "Cook",
    email: "johncook@gmail.com",
    school: "Best University",
    major: "B.S. Computer Science",
    dateOfStudy: "May 2022",
    companyName: "Fantastic Tech Company",
    position: "Senior Web Developer",
    startingDate: "Aug 2021",
    endingDate: "Aug 2022",
};

const EMPTY_PERSON = {
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    major: "",
    dateOfStudy: "",
    companyName: "",
    position: "",
    startingDate: "",
    endingDate: "",
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
        this.setState({ ...EMPTY_PERSON });
    }

    edit() {
        this.setState({ ...this.props.currentPerson });
    }

    render() {
        const
            {
                firstName, lastName, email, school,
                major, dateOfStudy, companyName,
                position, startingDate, endingDate,
            }
                = this.state;
        return (
            <form
                onSubmit={(e) => this.submit(e)}
                className="personEntry"
            >
                <h2>Personal Information</h2>
                <label for="firstName">
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
                <label>
                    Email
                    <input
                        onChange={(e) => this.setState({ email: e.target.value })}
                        value={email}
                        type="text"
                        name="email"
                    />
                </label>


                <h2>Education</h2>
                <label>
                    University
                    <input
                        onChange={(e) => this.setState({ school: e.target.value })}
                        value={school}
                        type="text"
                        name="school"
                    />
                </label>
                <label>
                    Major
                    <input
                        onChange={(e) => this.setState({ major: e.target.value })}
                        value={major}
                        type="text"
                        name="major"
                    />
                </label>
                <label>
                    Date
                    <input
                        onChange={(e) => this.setState({ dateOfStudy: e.target.value })}
                        value={dateOfStudy}
                        type="text"
                        name="dateOfStudy"
                    />
                </label>


                <h2>Experience</h2>
                <label>
                    Company
                    <input
                        onChange={(e) => this.setState({ companyName: e.target.value })}
                        value={companyName}
                        type="text"
                        name="school"
                    />
                </label>
                <label>
                    Position
                    <input
                        onChange={(e) => this.setState({ position: e.target.value })}
                        value={position}
                        type="text"
                        name="position"
                    />
                </label>
                <label>
                    From
                    <input
                        onChange={(e) => this.setState({ startingDate: e.target.value })}
                        value={startingDate}
                        type="text"
                        name="startingDate"
                    />
                </label>
                <label>
                    To
                    <input
                        onChange={(e) => this.setState({ endingDate: e.target.value })}
                        value={endingDate}
                        type="text"
                        name="endingDate"
                    />
                </label>
                <div className='buttons'>
                    <button type="submit">
                        Submit
                    </button>
                    <button type="button" onClick={() => this.edit()}>
                        Edit
                    </button>
                </div>

            </form>
        )
    }
}

export default PersonEntry;