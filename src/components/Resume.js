import React, { Component } from 'react';
import '../styles/Resume.css'

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
            <div className="resume">
                <div className="section">
                    <h1>{`${firstName} ${lastName}`}</h1>
                    <p>{position}</p>
                </div>

                <div className="section">
                    <h3> Personal Information</h3>
                    <p>{email}</p>
                    <p>Chicago, Illinois</p>
                    <p>123-456-7890</p>
                    <p>linkedin.com/in/johncook</p>
                </div>

                <div className="section">
                    <h3> Experience</h3>
                    <div className='headingWithDate'>
                        <h4>{companyName}</h4>
                        <p className="date">{`${startingDate}-${endingDate}`}</p>
                    </div>
                    <p className='position'>{position}</p>
                    <p>Sunt proident amet commodo duis nisi ea. Ea laborum enim minim culpa et in irure dolor nostrud reprehenderit do. Excepteur exercitation nulla ullamco tempor sint irure aute pariatur exercitation. Do proident fugiat sunt nostrud consequat pariatur deserunt consequat Lorem sunt ipsum commodo.</p>
                </div>

                <div className="section">
                    <h3> Education</h3>
                    <div className='headingWithDate'>
                        <h4>{school}</h4>
                        <p className="date">{dateOfStudy}</p>
                    </div>
                    <div>{major}</div>
                </div>
            </div>

        )
    }
}

export default Resume;