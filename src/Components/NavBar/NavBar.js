import React from "react";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";


function NavBar({home, about, jobs}) {
  const history = useHistory()

  const handleAbout=()=>{
    history.push('/about')
  }
  const handleHome=()=>{
    history.push('/')
  }
  const handleJobs=()=>{
    history.push('/jobs')
  }
  return (
    <div className="navBar">
      <div className="logo">
        <img className="logoImage" src={logo} width="270" height="200" alt="" />
      </div>

      <div className="navBarComponents">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: '5px'
          }}
          className="navBarComponent"
          onClick={handleHome}
        >
          Home
          <div>
           { home && <hr className="selectionLine" />}
          </div>
        </div>
          
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: '5px'
          }} onClick={handleAbout} className="navBarComponent">About
           <div>
           { about && <hr className="selectionLine" />}
          </div>
          </div>
           

        {/* <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: '5px'
          }} onClick={handleJobs} className="navBarComponent">Jobs 
           <div>
           { jobs && <hr className="selectionLine" />}
          </div>
          </div> */}

        <div className="navBarContactBtn pointer">Contact Us</div>
      </div>
    </div>
  );
}

export default NavBar;
