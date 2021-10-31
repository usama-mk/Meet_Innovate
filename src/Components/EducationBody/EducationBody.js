import React from "react";
import "./EducationBody.css";

function EducationBody() {
  return (
    <div className=" EducationBody JobRequirements flexColumnCenter">
      <div className="jrHeader">
        <div className="jrTitle tc">Education</div>

        <div
          style={{ width: "46vw", flexDirection: "column" }}
          className="eduContent flex"
        >
          <div style={{ marginBottom: "15px" }} className="sfCheckBox flex ac">
            <div className="radioBtn">
              <input type="radio" />
            </div>
            <div className="workHereText">I'm self taught</div>
          </div>
          {/* Inputs*/}
          <div style={{ marginBottom: "15px" }} className="row flex">
            <div className="inputComponent">
              <span style={{ marginLeft: "0px" }} id="exLabel">
                School & Training
              </span>
              <br />
              <input
                style={{ width: "325%", marginLeft: "0px" }}
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          {/* row end */}

          {/* Inputs*/}
          <div style={{ marginBottom: "15px" }} className="row flex sb">
            <div style={{ marginLeft: "0px" }} className="inputComponent">
              <span style={{ marginLeft: "0px" }} id="exLabel">
                Start Date
              </span>
              <br />
              <input
                style={{ marginLeft: "0px" }}
                type="text"
                placeholder="MM/YYYY"
              />
            </div>

            <div className="inputComponent">
              <span id="exLabel">End Date</span>
              <br />
              <input type="text" placeholder="MM/YYYY" />
            </div>
          </div>
          {/* row end */}

          {/* Inputs*/}
          <div style={{ marginBottom: "15px" }} className="row flex sb">
            <div className="">
              <span style={{ marginLeft: "2px" }} id="exLabel">
                Degree
              </span>
              <div style={{ marginTop: "5px" }} className="select">
                <select
                  style={{
                    width: "260px",
                    height: "40px",
                    padding: "5px",
                    paddingLeft: "20px",
                    opacity: 0.33,
                  }}
                  name=""
                  id=""
                >
                  <option value="0">Select Degree</option>
                </select>
              </div>
            </div>

            <div className="inputComponent">
              <span id="exLabel">Major</span>
              <br />
              <input type="text" placeholder="Select Major" />
            </div>
          </div>
          {/* row end */}

          {/* eduContent End */}
        </div>

        {/* Save and Continue Button */}
      </div>
      <div style={{ marginTop: "15px" }} className="saveContinueBtn tc">
        Save & Continue
      </div>
    </div>
  );
}

export default EducationBody;
