import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../../Pages/About/About'
import Education from '../../Pages/Education/Education'
import Experience from '../../Pages/Experience/Experience'
import Home from '../../Pages/Home/Home'
import Jobs from '../../Pages/Jobs/Jobs'
import Photo from '../../Pages/Photo/Photo'
import Requirements from '../../Pages/Requirements/Requirements'
import SelfIdentity from '../../Pages/SelfIdentity/SelfIdentity'
import Signup from '../../Pages/Signup/Signup'
import NavBar from '../NavBar/NavBar'

function Routes() {
    return (
        <div>
           <Router>
               <Switch>
               <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/about'>
                    <About />
                </Route>

                <Route exact path='/jobs'>
                    <Jobs />
                </Route>

                <Route exact path='/signup'>
                    <Signup />
                </Route>

                <Route exact path='/requirements'>
                    <Requirements />
                </Route>

                <Route exact path='/experience'>
                    <Experience />
                </Route>

                <Route exact path='/selfidentity'>
                    <SelfIdentity />
                </Route>

                <Route exact path='/education'>
                    <Education />
                </Route>
                <Route exact path='/photo'>
                    <Photo />
                </Route>
               </Switch>
           </Router>
        </div>
    )
}

export default Routes
