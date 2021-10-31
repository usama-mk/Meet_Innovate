import React from 'react'
import './SelfIdentity.css'
import ProgressHeader from "../../Components/ProgressHeader/ProgressHeader";
import requirementsLogo from "../../assets/images/requirementsLogo.png";
import SelfIdentityBody from '../../Components/SelfIdentityBody/SelfIdentityBody';


function SelfIdentity() {
    return (
        <div className="SelfIdentity Requirements flex">
        <div className="requirementsLogo">
          <img src={requirementsLogo} alt="" />
        </div>
  
        <div className="requirementsContent">
          <ProgressHeader selfIdentity={true} />
          <SelfIdentityBody />
        </div>
      </div>
    )
}

export default SelfIdentity
