import React from 'react'
import JobsBody from '../../Components/JobsBody/JobsBody'
import NavBar from '../../Components/NavBar/NavBar'
import './Jobs.css'


function Jobs() {
    return (
        <div className="jobs">
            <NavBar jobs={true} />
            <JobsBody/>
        </div>
    )
}

export default Jobs
