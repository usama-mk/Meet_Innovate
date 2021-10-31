import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./PhotoBody.css";

function PhotoBody() {
  const [file, setFile] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  return (
    <div className=" Photo JobRequirements flexColumnCenter">
      <div className="jrHeader">
        <div className="jrTitle tc">Self Identity</div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="jrSubTitle"
        >
          <div style={{ width: "73%" }} className="jsSTText tc">
            This photo will appear on your profile and for networking with peers
            within your innovative community.
          </div>
        </div>

        {/* Save and Continue Button */}
      </div>
      <div {...getRootProps()} className="dragWrapper">
        <input {...getInputProps()} />
        Drag and drop your photo or{" "}
        <span
        //    onClick={()=>{
        //       document.getElementById('uploadImage').click()
        //   }}
        >
          &nbsp;upload here
          {/* <input hidden id="uploadImage" style={{}} type="file" /> */}
        </span>
      </div>
      {file ? (
        <img
          width="300px"
          height="300px"
          style={{ marginBottom: "40px" }}
          src={file[0]?.preview}
          alt=""
        />
      ) : (
        ""
      )}
      <div className="saveContinueBtn tc">Save & Continue</div>
    </div>
  );
}

export default PhotoBody;
