import React from 'react'
import './Signup.css'
import singupLogo from '../../assets/images/signupLogo.png'
import close from '../../assets/images/close.png'
import googleLogo from '../../assets/images/googleLogo.png'
import googleLogo2 from '../../assets/images/googleLogo2.png'

function Signup() {
    return (
        <div className="Signup">
            <div className="signupModal">
                <div className="closeModal pointer">
                    <img src={close} width='18px' alt="" />
                </div>

                <div className="signupContent">
                    <div className="signupLogo">
                        <img width='120px' src={singupLogo} alt="" />
                    </div>
                    <div className="signupText">
                        Sign Up
                    </div>

                    <div className="signupTextInfo">
                    We have created a place for you to <span className="blueText">network</span> and <span className="blueText">connect</span> you to companies that are prioritizing diversity in their workplace.
                    </div>

                    <div className="googleContinue pointer">
                        <div className="googleLogo">
                            <img width='21px' src={googleLogo2} alt="" />
                        </div>
                        <div className="googleText">
                        Continue with Google
                        </div>
                    </div>

                    <div className="orSection flex ac">
                        <div className="hr">
                            <hr />
                        </div>

                        <div className="orText">
                            or
                        </div>
                        
                        <div className="hr">
                            <hr />
                        </div>
                    </div>
                    {/* singup form */}

                    <div className="signupForm">
                        <form action="">

                       <div className="row flex ">
                       <div className="signUpformComponent">
                        <span id="signupLabel">First Name</span>
                        <br />
                        <input type="text" />
                        </div>

                        <div className="signUpformComponent lastName">
                        <span id="signupLabel">Last Name</span>
                        <br />
                        <input type="text" />
                        </div>
                        {/* row end */}
                       </div>

                       <div className="signUpformComponent">
                        <span id="signupLabel">Email Address</span>
                        <br />
                        <input className="w100"  type="text" />
                        </div>

                        <div className="signUpformComponent">
                        <span id="signupLabel">Password</span>
                        <br />
                        <input className="w100" type="password" />
                        </div>

                            <div className="signupBtnWrapper">
                            <div className="signupButton pointer">
                                Sign Up
                            </div>
                            </div>
                        </form>

                        <div className="loginHere">
                        Have an account? <span className='pointer' >Log in Here</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
