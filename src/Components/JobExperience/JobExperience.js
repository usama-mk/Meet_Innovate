import React from "react";
import "./JobExperience.css";
import addLogo from "../../assets/images/Add.png";

function JobExperience() {
  return (
    <div className=" JobExperience JobRequirements flexColumnCenter">
      <div className="jrHeader">
        <div className="jrTitle tc">Work Experience</div>
        <div className="jrSubTitle tc">
          You can add additional work experience to your profile later
        </div>

        <div className="exContent">
          {/* Inputs*/}
          <div className="row flex sb">
            <div className="inputComponent">
              <span id="exLabel">Current/Recent Employer</span>
              <br />
              <input type="text" placeholder="Company" />
            </div>

            <div className="inputComponent">
              <span id="exLabel">Job Title</span>
              <br />
              <input type="text" placeholder="Role" />
            </div>
          </div>
          {/* row end */}
          <div className="row flex sb">
            <div className="inputComponent">
              <span id="exLabel">Start Date</span>
              <br />
              <input type="text" placeholder="MM/YYYY" />
            </div>

            <div className="inputComponent">
              <span id="exLabel">End Date</span>
              <br />
              <input type="text" placeholder="MM/YYYY" />
            </div>
          </div>
          {/* row end */}

          <div className="currentwork flex ac">
            <div className="radioBtn">
              <input type="radio" />
            </div>
            <div className="workHereText">I currently work here</div>
          </div>

          {/* Add Exp */}

          <div className="addExpBtn flex ">
            <div className="addLogo">
              <img src={addLogo} width="19px" height="20px" alt="" />
            </div>

            <div className="addExpText">Add Experience</div>
          </div>
        </div>
        {/* Save and Continue Button */}
      </div>
      <div className="saveContinueBtn tc">Save & Continue</div>
    </div>
  );
}

export default JobExperience;
