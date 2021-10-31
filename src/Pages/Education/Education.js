import React from "react";
import "./Education.css";
import ProgressHeader from "../../Components/ProgressHeader/ProgressHeader";
import requirementsLogo from "../../assets/images/requirementsLogo.png";
import JobExperience from "../../Components/JobExperience/JobExperience";
import EducationBody from "../../Components/EducationBody/EducationBody";

function Education() {
  return (
    <div className="Education Requirements flex">
      <div className="requirementsLogo">
        <img src={requirementsLogo} alt="" />
      </div>

      <div className="requirementsContent">
        <ProgressHeader education={true} />
        <EducationBody/>
      </div>
    </div>
  );
}

export default Education;
