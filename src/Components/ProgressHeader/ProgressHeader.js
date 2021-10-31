import React from "react";
import { Link } from "react-router-dom";
import "./ProgressHeader.css";

function ProgressHeader({
  requirements,
  experience,
  selfIdentity,
  education,
  photo,
}) {
  return (
    <div className="ProgressHeader ">
      <div className="phContent">
        <div className="progressNames flex w100">
          <Link to="/requirements" style={{ textDecoration: "none" }}>
            <div
              className={`phRequirements progressName ${
                requirements ? "selectedProgress" : ""
              }`}
            >
              Requirements
            </div>
          </Link>

          <Link to="/experience" style={{ textDecoration: "none" }}>
            <div
              className={`phExperience progressName ${
                experience ? "selectedProgress" : ""
              } `}
            >
              Experience
            </div>
          </Link>

          <Link to="/education" style={{ textDecoration: "none" }}>
            <div
              className={`phEducation progressName ${
                education ? "selectedProgress" : ""
              } `}
            >
              Education
            </div>
          </Link>

          <Link to="/photo" style={{ textDecoration: "none" }}>
            <div
              className={`phPhoto progressName ${
                photo ? "selectedProgress" : ""
              } `}
            >
              Photo
            </div>
          </Link>

          <Link to="/selfidentity" style={{ textDecoration: "none" }}>
            <div
              className={`phSelfIdentify progressName ${
                selfIdentity ? "selectedProgress" : ""
              } `}
            >
              Self Identify
            </div>
          </Link>

          <div className="phSkills progressName">Skills</div>

          <div className="phAuthorizations progressName">Authorizations</div>
        </div>
        <div className="progressBar">
          <div
            class="greyBorder"
            style={{
              height: "10px",
              width: requirements
                ? "14.2%"
                : experience
                ? "28.4%"
                : selfIdentity
                ? "69%"
                : education
                ? "42.6%"
                : photo
                ? "54.8%"
                : "",
              backgroundColor: "#313FFF",
              margin: "20px",
              marginLeft: "0px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressHeader;
