import React from "react";
import "./Experience.css";
import ProgressHeader from "../../Components/ProgressHeader/ProgressHeader";
import requirementsLogo from "../../assets/images/requirementsLogo.png";
import JobExperience from "../../Components/JobExperience/JobExperience";

function Experience() {
  return (
    <div className="Experience Requirements flex">
      <div className="requirementsLogo">
        <img src={requirementsLogo} alt="" />
      </div>

      <div className="requirementsContent">
        <ProgressHeader experience={true} />
        <JobExperience />
      </div>
    </div>
  );
}

export default Experience;
