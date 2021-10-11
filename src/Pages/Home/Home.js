import React from 'react'
import HomeBody from '../../Components/HomeBody/HomeBody'
import HomeBodyPartners from '../../Components/HomeBodyPartners/HomeBodyPartners'
import NavBar from '../../Components/NavBar/NavBar'
import './Home.css'

function Home() {
    return (
        <div className="home">
        <NavBar home={true}/>
        <HomeBody/>
        <HomeBodyPartners/>
        </div>
    )
}

export default Home
