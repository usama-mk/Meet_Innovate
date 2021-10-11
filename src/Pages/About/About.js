import React from 'react'
import './About.css'
import NavBar from '../../Components/NavBar/NavBar'
import AboutBody from '../../Components/AboutBody/AboutBody'

function About() {
    return (
        <div className="about">
            <NavBar about={true}/>
            <AboutBody/>
            
        </div>
    )
}

export default About
