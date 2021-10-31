import React from "react";
import "./Photo.css";
import ProgressHeader from "../../Components/ProgressHeader/ProgressHeader";
import requirementsLogo from "../../assets/images/requirementsLogo.png";
import PhotoBody from "../../Components/PhotoBody/PhotoBody";

function Photo() {
  return (
    <div className="Photo Requirements flex">
      <div className="requirementsLogo">
        <img src={requirementsLogo} alt="" />
      </div>

      <div className="requirementsContent">
        <ProgressHeader photo={true} />
        <PhotoBody/>
      </div>
    </div>
  );
}

export default Photo;
