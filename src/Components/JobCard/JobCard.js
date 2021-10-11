import React from 'react'
import './JobCard.css'
import fire from '../../assets/images/fire.png'
import bookmark from '../../assets/images/bookmark.png'

function JobCard({position, company, address, days, active, applicants, src}) {
    return (
        <div className="jobCard pointer">
            <img className="bookmark" src={bookmark} alt="" />
            <img className="fire" src={fire} alt="" />
            <div className="jobCardContent">
                <img className="jobCardImage" src={src} alt="" />

                <div className="jobPosition">{position}</div>

                <div className="jobCompany">{company}</div>

                <div className="jobAddress">{address}</div>
            </div>

            <div className="jobStatus">
               {
                   active &&
                   <div className="activelyRecruiting" >{active}</div>
               }
                <hr className="hr" />
                <div className="statusDaysWrapper">
                <div className="statusDays">{days} ago</div>
                {
                   applicants &&
                   <div className="applicants" >{applicants}</div>
               }
                </div>
            </div>
        </div>
    )
}

export default JobCard
