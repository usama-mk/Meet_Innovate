import React from "react";
import JobRequirements from "../../Components/JobRequirements/JobRequirements";
import ProgressHeader from "../../Components/ProgressHeader/ProgressHeader";
import "./Requirements.css";
import requirementsLogo from "../../assets/images/requirementsLogo.png";

function Requirements() {
  return (
    <div className="Requirements flex">
      <div className="requirementsLogo">
        <img src={requirementsLogo} alt="" />
      </div>

      <div className="requirementsContent">
        <ProgressHeader requirements={true} />
        <JobRequirements />
      </div>
    </div>
  );
}

export default Requirements;
