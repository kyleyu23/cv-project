import React, { useState } from 'react';
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

function PersonEntry(props) {
    const [state, setState] = useState({ ...props.currentPerson ?? DEFAULT_PERSON });

    const submit = (e) => {
        props.onSubmit(state);
        e.preventDefault();
        clearForm();
    };

    const clearForm = () => {
        setState({ ...EMPTY_PERSON });
    };

    const edit = () => {
        setState({ ...props.currentPerson });
    };

    const
        {
            firstName, lastName, email, school,
            major, dateOfStudy, companyName,
            position, startingDate, endingDate,
        }
            = state;
    return (
        <form
            onSubmit={submit}
            className="personEntry"
        >
            <h2>Personal Information</h2>
            <label>
                First Name
                <input
                    onChange={(e) => setState({ ...state, firstName: e.target.value })}
                    value={firstName}
                    type="text"
                    name="firstName"
                />
            </label>

            <label>
                Last Name
                <input
                    onChange={(e) => setState({ ...state, lastName: e.target.value })}
                    value={lastName}
                    type="text"
                    name="lastName"
                />
            </label>
            <label>
                Email
                <input
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                    value={email}
                    type="text"
                    name="email"
                />
            </label>


            <h2>Education</h2>
            <label>
                University
                <input
                    onChange={(e) => setState({ ...state, school: e.target.value })}
                    value={school}
                    type="text"
                    name="school"
                />
            </label>
            <label>
                Major
                <input
                    onChange={(e) => setState({ ...state, major: e.target.value })}
                    value={major}
                    type="text"
                    name="major"
                />
            </label>
            <label>
                Date
                <input
                    onChange={(e) => setState({ ...state, dateOfStudy: e.target.value })}
                    value={dateOfStudy}
                    type="text"
                    name="dateOfStudy"
                />
            </label>


            <h2>Experience</h2>
            <label>
                Company
                <input
                    onChange={(e) => setState({ ...state, companyName: e.target.value })}
                    value={companyName}
                    type="text"
                    name="school"
                />
            </label>
            <label>
                Position
                <input
                    onChange={(e) => setState({ ...state, position: e.target.value })}
                    value={position}
                    type="text"
                    name="position"
                />
            </label>
            <label>
                From
                <input
                    onChange={(e) => setState({ ...state, startingDate: e.target.value })}
                    value={startingDate}
                    type="text"
                    name="startingDate"
                />
            </label>
            <label>
                To
                <input
                    onChange={(e) => setState({ ...state, endingDate: e.target.value })}
                    value={endingDate}
                    type="text"
                    name="endingDate"
                />
            </label>
            <div className='buttons'>
                <button type="submit">
                    Submit
                </button>
                <button type="button" onClick={edit}>
                    Edit
                </button>
            </div>

        </form>
    )
}

export default PersonEntry;