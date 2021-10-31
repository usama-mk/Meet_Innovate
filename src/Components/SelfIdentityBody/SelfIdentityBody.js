import React from "react";
import "./SelfIdentityBody.css";
import addLogo from "../../assets/images/Add.png";

function SelfIdentityBody() {
  return (
    <div className=" SelfIdentityBody JobRequirements flexColumnCenter">
      <div className="jrHeader">
        <div className="jrTitle tc">Self Identity</div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="jrSubTitle"
        >
          <div style={{ width: "63%" }} className="jsSTText tc">
            This information will only be visible to recruiters, and does not
            impact your chances of getting a job.
          </div>
        </div>

        <div style={{ width: "100%" }} className="sfSelects flex jc">
          {/* Inputs*/}
          <div className="">
            <span style={{ marginLeft: "2px" }} id="exLabel">
              Pronouns
            </span>
            <div style={{ marginTop: "5px" }} className="select">
              <select style={{ width: "400px", opacity: 0.33 }} name="" id="">
                <option value="0">Select Pronouns</option>
              </select>
            </div>
          </div>
          {/*  */}
          <div className="">
            <span style={{ marginLeft: "62px" }} id="exLabel">
              Gender
            </span>
            <div style={{ marginTop: "5px" }} className="select">
              <select
                style={{ width: "400px", marginLeft: "60px", opacity: 0.33 }}
                name=""
                id=""
              >
                <option value="0">Select Gender</option>
              </select>
            </div>
          </div>
        </div>
        {/* Race */}
        <div className="sfRace">
          <div
            style={{ marginLeft: "-12px" }}
            className="sfRaceHeading"
            id="exLabel"
          >
            Race/Ethnicity
          </div>
          <div style={{ marginLeft: "0px" }} className="sfChooseText">
            Choose all that apply.
          </div>

          <div className="sfCheckboxesWrapper flex">
            {/*left checkboxes */}
            <div className="sfCheckboxes">
              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">African American or Black</div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">Hispanic or LatinX</div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">Middle Eastern</div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">
                  Native Hawaiian or Pacific Islander
                </div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">White or Caucasian</div>
              </div>
              {/*  */}
            </div>
            {/* left check boxex end above */}

            {/*right checkboxes */}
            <div style={{ marginLeft: "60px" }} className="sfCheckboxes">
              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">Asian</div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">Multiracial</div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">
                  Indigenous Peoples, First Nations, Native American, or Alaska
                  Native
                </div>
              </div>
              {/*  */}

              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">
                  Another race, ethnicity, or origin
                </div>
              </div>
              {/*  */}
              {/* checkbox */}
              <div className="sfCheckBox flex ac">
                <div className="radioBtn">
                  <input type="radio" />
                </div>
                <div className="workHereText">I prefer not to answer</div>
              </div>
              {/*  */}
            </div>
            {/* right check boxex end above */}
          </div>
        </div>
        {/* Save and Continue Button */}
      </div>
      <div className="saveContinueBtn tc">Save & Continue</div>
    </div>
  );
}

export default SelfIdentityBody;
