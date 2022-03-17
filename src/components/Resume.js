import React, { Component } from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const
            {
                firstName, lastName, email, school,
                major, dateOfStudy, companyName,
                position, startingDate, endingDate,
            }
                = this.props.currentPerson;


        return (
            <div>
                <div>{`${firstName} ${lastName}`}</div>
                <br />

                <div> Personal Information</div>
                <div>{email}</div>
                <br />


                <div> Experience</div>
                <div>{companyName}</div>
                <div>{position}</div>
                <div>{`${startingDate} - ${endingDate}`}</div>
                <br />

                <div> Education</div>
                <div>{school}</div>
                <div>{major}</div>
                <div>{dateOfStudy}</div>

            </div>

        )
    }
}

export default Resume;