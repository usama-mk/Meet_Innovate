import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../../Pages/About/About'
import Home from '../../Pages/Home/Home'
import Jobs from '../../Pages/Jobs/Jobs'
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
               </Switch>
           </Router>
        </div>
    )
}

export default Routes
