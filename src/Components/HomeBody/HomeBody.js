import React, { useState } from "react";
import "./HomeBody.css";
import homeBodyImage from "../../assets/images/homeBodyImage.png";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function HomeBody() {
  const [joinInput, setJoinInput] = useState("");
  const handleJoinInput = (e) => {
    setJoinInput(e.target.value);
  };

  const updateDBJoin = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "userEmails"), {
        email: joinInput,
      });
      console.log("Document written with ID: ", docRef.id);
      setJoinInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="homeBody">
      <div className="homeBodyComponent">
        <span className="opportinitiesText">CONNECTING YOU TO</span>
        <br />
        <span className="meaningFulText">MEANINGFUL</span>
        <br />
        <span className="opportinitiesText">OPPURTUNITIES</span>
        <br />
        <div className="mt">
          <span className="magicalText">
            We are building a magical product!
          </span>
          <br />
          <span className="magicalText">
            Be the <span className="firstAccessText">first to access</span> when
            we launch.
          </span>
          <br />

          <form onSubmit={updateDBJoin} className="form">
            <div className="waitlist">
              join the waitlist to gain early access
            </div>
            <div className="joinInput">
              <input
                value={joinInput}
                onChange={handleJoinInput}
                type="email"
                name="email"
                required
                placeholder="Email*"
              />
              <input value="Join" type="submit" className="joinBtn pointer" />
            </div>
          </form>
        </div>
      </div>
      <div className="homeBodyComponent">
        <img
          className="homeBodyImage"
          max-width="697px"
          height="679px"
          src={homeBodyImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeBody;
