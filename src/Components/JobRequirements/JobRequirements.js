import React from "react";
import "./JobRequirements.css";

function JobRequirements() {
  const toggleExSelectBtn = (id) => {
    var element = document.getElementById(id);
    element.classList.toggle("selectedExBtn");
  };
  return (
    <div className="JobRequirements flexColumnCenter">
      <div className="jrHeader">
        <div className="jrTitle tc">Job Requirements</div>
        <div className="jrSubTitle tc">
          Your single profile gives you access to apply to hundreds of jobs.
        </div>

        <div className="jrContent">
          {/* Role */}
          <div className="jrRoles flex">
            <div className="quetion">
              <div className="bold">Current or preferred role</div>

              <div className="textTheme">
                What roles are you interested in? Choose up to 6?
              </div>

              <div className="jrRoleButtons flex">
                <div className="financeBtn jrRoleButton flex ac">
                  <div className="btnName">Finance</div>
                  <div className="crossBtn">X</div>
                </div>

                <div className="engineeringBtn jrRoleButton flex ">
                  {" "}
                  <div className="btnName">Engineering</div>
                  <div className="crossBtn">X</div>
                </div>
              </div>
            </div>

            <div className="search">
              <input type="text" placeholder="Search Roles" name="" id="" />
            </div>
          </div>

          {/* Experience */}
          <div className="flex">
            <div className="quetion">
              <div className="bold">Fulltime years of experience</div>

              <div className="textTheme">
                How many years of fulltime experience do you have in your role?
              </div>

              <div className="jrExperienceBtns flex ">
                <div
                  onClick={() => toggleExSelectBtn("exBtn1")}
                  id="exBtn1"
                  className="financeBtn jrExperienceBtn selectedExBtn"
                >
                  &#60; 1 year
                </div>

                <div
                  onClick={() => toggleExSelectBtn("exBtn2")}
                  id="exBtn2"
                  className="experienceBtn jrExperienceBtn"
                >
                  1-3 years
                </div>

                <div
                  onClick={() => toggleExSelectBtn("exBtn3")}
                  id="exBtn3"
                  className="experienceBtn jrExperienceBtn"
                >
                  4-7 years
                </div>

                <div
                  onClick={() => toggleExSelectBtn("exBtn4")}
                  id="exBtn4"
                  className="experienceBtn jrExperienceBtn"
                >
                  8+ years
                </div>
              </div>
            </div>
          </div>

          {/* Preferred Location */}
          <div className="flex">
            <div className="quetion">
              <div className="bold">Preferred Location</div>

              <div className="textTheme">
                Where are you open to working? Choose all that apply
              </div>
            </div>

            <div className="search">
              <input type="text" placeholder="Search Location" name="" id="" />
            </div>
          </div>

          {/* Company Size */}
          <div className=" selectSection">
            <div className="quetion">
              <div className="bold">Company Size</div>

              <div className="textTheme">
                What size company are you looking for?
              </div>
              <div className="select">
                <select style={{ opacity: 0.61 }} name="" id="">
                  <option value="0">Select Preferred Company Size</option>
                </select>
              </div>
            </div>
          </div>

          {/* Start Schedule */}
          <div className=" selectSection">
            <div className="quetion">
              <div className="bold">Start Schedule</div>

              <div className="textTheme">
                How soon are you looking to start working?
              </div>
              <div className="select">
                <select style={{ opacity: 0.61 }} name="" id="">
                  <option value="0">Select Preference</option>
                </select>
              </div>
            </div>
          </div>
          {/* End start schedule */}
        </div>
      </div>
      {/* Save and Continue Button */}
      <div className="saveContinueBtn tc">Save & Continue</div>
    </div>
  );
}

export default JobRequirements;
