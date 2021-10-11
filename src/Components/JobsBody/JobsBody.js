import React, { useState } from 'react'
import './JobsBody.css'
import jobsCommunity2 from '../../assets/images/jobsCommunity2.png'
import JobCard from '../JobCard/JobCard'
import fenty from '../../assets/images/fenty.png'
import chanel from '../../assets/images/chanel.png'
import wix from '../../assets/images/wix.png'
import spotify from '../../assets/images/spotify.png'
import acadia from '../../assets/images/acadia.png'
import bevy from '../../assets/images/bevy.png'
import nextPage from '../../assets/images/nextPage.png'



function JobsBody() {
    const[cards, setCards]= useState([{
        position: 'Director of Image',
        company: 'Fenty',
        address: 'New York, NY',
        active: '',
        days:'2 days',
        applicants: '',
        src: fenty
    },
    {
        position: 'Developer',
        company: 'Chanel',
        address: 'Atlanta, GA',
        active: 'Actively Recruiting',
        days:'2 weeks',
        applicants: '11 Applicants',
        src: chanel
    },
    {
        position: 'Product Designer',
        company: 'Wix',
        address: 'San Diego, CA',
        active: '',
        days:'2 weeks',
        applicants: 'NEW',
        src: wix
    },
    {
        position: 'Director of Technology',
        company: 'Spotify',
        address: 'New York, NY',
        active: '',
        days:'2 days',
        applicants: '',
        src: spotify
    },
    {
        position: 'UX Designer',
        company: 'Acadia',
        address: 'Atlanta, GA',
        active: '',
        days:'2 weeks',
        applicants: '11 Applicants',
        src: acadia
    },
    {
        position: 'Product Designer',
        company: 'Becy',
        address: 'Los Angeles, CA',
        active: '',
        days:'2 weeks',
        applicants: 'New',
        src: bevy
    }

     ])
    const [pages,_]= useState([{
        page: "01",
        selected: true
    },
    {
        page: "02",
        selected: false
    },
    {
        page: "03",
        selected: false
    },
    {
        page: "04",
        selected: false
    },
    {
        page: "05",
        selected: false
    },
    {
        page: "06",
        selected: false
    },

])
    return (
        <div className="jobsBodyWrapper">
            <div className="jobsBody">
                <div className="search">
                    <div className="searchText">
                        Search For you next Job
                    </div>

                    <div className="searchElements">
                        <div className="element">
                            <div className="elementText">
                                I'm looking for
                            </div>
                            <div className="elementInput">
                                <input placeholder="Title, Skill or Company" type="text" name="" id="" />
                            </div>
                        </div>

                        <div className="element">
                            <div className="elementText">
                                Where
                            </div>
                            <div className="elementInput">
                                <input placeholder="City, State, or Zip Code" type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="searchButtonWrapper">
                            <div className="searchButton">
                            Search
                            </div>
                        </div>
                       
                    </div>
                </div>

                <div className="recommendedTexts">
                    <div className="recommendedTitle">
                        Recommended for you
                    </div>
                    <div className="recommendedSub">
                    Based on your profile and search history
                    </div>
                </div>

                <div className="jobCards">
                        {
                            cards.map((card, key)=>{
                               return <JobCard
                               position={card.position}
                               company={card.company}
                               src={card.src}
                               active={card.active}
                               applicants={card.applicants}
                               days={card.days}
                               address={card.address}
                               />
                            })
                        }
 
                </div>

                <div className="pageNumbers">
                    {pages.map((pageDetails, key)=>{
                        return <div className="pageNumber pointer" style={{color: pageDetails.selected?'rgba(24,33,214,1)':''}} >
                            {pageDetails.page}
                        </div>
                    })}

                    <img src={nextPage} alt="" className="nextPage pointer " />
                </div>


                <div className="jobsCommunity">
                    <div className="communityText">
                        Community
                    </div>
                    <div className="communityDesc">
                    We are focused on building a community that connects you to meaningful opportunities
                    </div>

                    <img src={jobsCommunity2} className="jobsCommunityImage"  alt="" />

                    <div className="afterImageDesc">
                    Join our community and gain access to career opportunities, networking events, conferences, and more. 

                    </div>

                    <div className="joinSlackButton pointer">Join On Slack</div>
                </div>
            </div>
        </div>
    )
}

export default JobsBody
