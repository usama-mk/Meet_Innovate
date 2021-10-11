import React, { useState } from "react";
import "./AboutBody.css";
import about_group from "../../assets/images/about_group.png";
import mission_image from "../../assets/images/mission_image.png";
import vision_image from "../../assets/images/vision_image.png";
import talentImage from "../../assets/images/talentImage.png";
import mail from "../../assets/images/mail_.png";
import map from "../../assets/images/map_.png";
import insta from "../../assets/images/insta_.png";
import linkedin from "../../assets/images/linkedin_.png";
import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

function AboutBody() {
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [phoneNo, setPhoneNo]= useState('')
  const [email, setEmail]= useState('')
  const [company, setCompany]= useState('')
  const [help, setHelp]= useState('')

  const handleMessageSubmit= async(e)=>{
    e.preventDefault()

    try {
        const docRef = await addDoc(collection(db, "userMessages"), {
          firstName: firstName,
          lastName: lastName,
          phoneNo: phoneNo,
          email: email,
          company: company,
          help: help
        });
        console.log("Document written with ID: ", docRef.id);
        setFirstName('')
        setLastName('')
        setPhoneNo('')
        setEmail('')
        setCompany('')
        setHelp('')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
 
  }
  return (
    <div className="aboutBody">
      <div className="about_group_image_wrapper">
        <img className="about_group_image" src={about_group} alt="" />
      </div>

      <div className="companyDefinition">
        <div className="intro">
          <div className="introText">Company Definition</div>
          <div className="intro_desc">
            Meet & Innovate is a professional networking platform that connects
            minority talent to career and networking opportunities. We help
            companies drive pipeline diversity.
          </div>
        </div>

        <div className="missionVision">
          <div className="mission">
            <div className="mission_image_wrapper">
              <img className="mission_image" src={mission_image} alt="" />
            </div>
            <div className="mission_text">Mission</div>

            <div className="mission_desc">
              To work every day to ensure that companies are doing everything
              they can do to create a fair and equitable opportunity when
              diverse candidates apply for a job.
            </div>
          </div>

          {/* Vision */}

          <div className="vision">
            <div className="vision_text">Vision</div>

            <div className="vision_desc">
            Assisting every company in the world with committing to driving pipeline diversity and implementing practices that encourage workplace equity for all.
            </div>

            <div className="vision_image_wrapper">
              <img className="vision_image" src={vision_image} alt="" />
            </div>
          </div>
        </div>

        <div className="talent">
          <div className="talent_image_wrapper">
            <img className="talentImage" src={talentImage} alt="" />
          </div>

          <div className="talent_desc_wrapper">
            <div className="talent_text">Talent Ecosystem</div>
            <div className="talent_desc">
              When you work with us you’re not just pulling random talent,
              you’re receiving talent directly from our ecosystem. We focus on
              people development, skills verification, and talent that is
              actively seeking employment
            </div>
          </div>
        </div>

        <div className="getInTouch">
          <div className="getInTouchText">
              <span>Get In Touch</span>
          </div>

          <div className="getForm">
            <div className="getLeft">
              <div className="sendMessage">Send A Message</div>

              <form onSubmit={handleMessageSubmit}>
                <div className="inTwo">
                  <div>
                    <div>
                      <span id="First_Name">First Name</span>
                    </div>
                    <input required value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text" name="" id="" />
                  </div>

                  <div>
                    <div>
                      <span id="First_Name">Last Name</span>
                    </div>
                    <input required value={lastName} onChange={(e)=> setLastName(e.target.value)}  type="text" name="" id="" />
                  </div>
                </div>

                <div className="inTwo">
                  <div>
                    <div>
                      <span id="First_Name">Phone</span>
                    </div>
                    <input required value={phoneNo} onChange={(e)=> setPhoneNo(e.target.value)}  type="number" name="" id="" />
                  </div>

                  <div>
                    <div>
                      <span id="First_Name">Email</span>
                    </div>
                    <input required value={email} onChange={(e)=> setEmail(e.target.value)}  type="email" name="" id="" />
                  </div>
                </div>

                <div className="inFull">
                  <div>
                    <div>
                      <span id="First_Name">Group or Company</span>
                    </div>
                    <input required value={company} onChange={(e)=> setCompany(e.target.value)}  type="text" name="" id="" />
                  </div>
                </div>

                <div className="inFull">
                  <div>
                    <div className="helpText">
                      <span id="First_Name">How Can We Help?</span>
                    </div>
                    <input required value={help} onChange={(e)=> setHelp(e.target.value)}  type="text" name="" id="" />
                  </div>
                </div>

                <div className="submitWrapper">
                  <input value="Submit" type="submit" className="submit pointer"/>
                </div>
              </form>
            </div>

            <div className="getContact">
              <div className="contactInfoText">Contact Info</div>

              <div className="contacts">
                <div className="phone">
                  <svg
                    class="Path_1213"
                    viewBox="0.003 0 27.234 27.244"
                    color="white"
                    width="20"
                    fill="white"
                  >
                    <path
                      id="Path_1213"
                      d="M 8.555227279663086 9.01903247833252 L 2.264433622360229 2.72498345375061 C 3.076409578323364 1.913004398345947 3.886771202087402 1.099411487579346 4.700361251831055 0.2858178913593292 C 5.076484680175781 -0.09030740708112717 5.683448791503906 -0.09676451236009598 6.061186790466309 0.2745181024074554 L 10.96209812164307 5.180291652679443 C 11.33660697937012 5.554802894592285 11.33660697937012 6.171454906463623 10.95725536346436 6.549195289611816 L 9.883768081665039 7.621073246002197 L 8.884537696838379 8.620307922363281 C 8.761853218078613 8.744606018066406 8.650469779968262 8.87697696685791 8.555227279663086 9.01903247833252 Z M 13.73056030273438 19.27127265930176 C 12.70065975189209 18.38504028320313 11.71273136138916 17.44391632080078 10.75385856628418 16.48665428161621 C 9.796597480773926 15.52293395996094 8.858709335327148 14.53822612762451 7.970862865447998 13.50347995758057 C 7.244442939758301 12.66405773162842 7.102387428283691 11.44851112365723 7.48173999786377 10.42506313323975 L 1.024678111076355 3.96635913848877 C -0.478203147649765 5.511218070983887 -0.2861055433750153 9.341885566711426 1.360445380210876 12.70764350891113 C 2.067493200302124 14.16371631622314 2.98439621925354 15.47773170471191 3.931970596313477 16.72718238830566 C 4.8779296875 17.96694183349609 5.915902614593506 19.1389045715332 7.008760452270508 20.23983764648438 C 8.104846000671387 21.33915710449219 9.270346641540527 22.38197898864746 10.51333045959473 23.32794189453125 C 11.76277351379395 24.27874565124512 13.08001232147217 25.18920135498047 14.52639484405518 25.89463996887207 C 17.89698219299316 27.53958320617676 21.72924613952637 27.72038078308105 23.27248382568359 26.21587562561035 L 16.81381034851074 19.75716972351074 C 15.79036521911621 20.13652229309082 14.57320976257324 19.9960823059082 13.73056030273438 19.27127265930176 Z M 26.9594669342041 21.17773246765137 L 22.05855560302734 16.27518463134766 C 21.68243598937988 15.90390300750732 21.0657844543457 15.90390300750732 20.68966102600098 16.28003120422363 L 20.68643379211426 16.28003120422363 L 19.60971832275391 17.35513687133789 L 18.61694526672363 18.35275650024414 C 18.49426078796387 18.47544288635254 18.36027336120605 18.58359527587891 18.21822166442871 18.68368148803711 L 24.50740051269531 24.97611618041992 C 25.32099151611328 24.16090965270996 26.13296508789063 23.35054397583008 26.94816970825195 22.53856468200684 C 27.3275203704834 22.16243743896484 27.33559036254883 21.55385589599609 26.9594669342041 21.17773246765137 Z"
                    ></path>
                  </svg>
                  <div>770-744-5726</div>
                </div>

                <div className="phone">
                  <img src={mail} width="20" alt="" />
                  <div>info@meetandinnovate.com</div>
                </div>

                <div className="phone">
                  <img src={map} width="20" alt="" />
                  <div>Atlanta, GA</div>
                </div>
              </div>

              <div className="socialContact">
                  <img src={insta} width='30' alt="" />
                  <img src={linkedin} width='30' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
