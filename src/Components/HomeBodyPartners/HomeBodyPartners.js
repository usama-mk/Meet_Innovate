import React from 'react'
import './HomeBodyPartners.css'
import acadia from '../../assets/images/Acadia__ba.png'
import acadiaWeb from '../../assets/images/Acadia__baWeb.png'
import bevy from '../../assets/images/bevy_.png'
import kyte__bc from '../../assets/images/kyte__bc.png'
import guru from '../../assets/images/guru_.png'
import pendo__bl from '../../assets/images/pendo__bl.png'
import prefect1 from '../../assets/images/prefect1.png'
import verkada1 from '../../assets/images/verkada1.png'
import AcadiaHover from '../../assets/images/AcadiaHover.png'
import bevy_hover from '../../assets/images/bevy_hover.png'
import guru_hover from '../../assets/images/guru_hover.png'
import kyteHover from '../../assets/images/kyteHover.png'
import pendoHover from '../../assets/images/pendoHover.png'
import prefectHover from '../../assets/images/prefectHover.png'
import verkadaHover from '../../assets/images/verkadaHover.png'




function HomeBodyPartners() {
    return (
        <div className="homeBodyPartners">
            <div className="ourPartners">
                Our Partners
            </div>

            <div  className="partnersLogoWrapper">
               <div className="partnersLogo">
              <img src={acadiaWeb}    onMouseOver={e => (e.currentTarget.src = AcadiaHover  )} onMouseOut={e => (e.currentTarget.src = acadiaWeb )} alt="logo" />
               </div>
               <div className="partnersLogo">
               <img src={bevy} onMouseOver={e => (e.currentTarget.src = bevy_hover  )} onMouseOut={e => (e.currentTarget.src = bevy )} alt="logo"  max-width="152" max-height="152" />
               </div>
               <div className="partnersLogo">
               <img src={guru} onMouseOver={e => (e.currentTarget.src = guru_hover  )} onMouseOut={e => (e.currentTarget.src = guru )} alt="logo"  max-width="146" max-height="152" />
               </div>
               <div className="partnersLogo">
               <img src={kyte__bc} onMouseOver={e => (e.currentTarget.src = kyteHover  )} onMouseOut={e => (e.currentTarget.src = kyte__bc )} alt="logo"  max-width="172" max-height="118" />
               </div>
            </div>

            <div className="partnersNameWrapper">
               <div className="partnersName">
               <img src={pendo__bl} onMouseOver={e => (e.currentTarget.src = pendoHover  )} onMouseOut={e => (e.currentTarget.src = pendo__bl )} alt="logo"  max-width="295" max-height="171" />

               </div>
               <div className="partnersName">
               <img src={prefect1} onMouseOver={e => (e.currentTarget.src = prefectHover  )} onMouseOut={e => (e.currentTarget.src = prefect1 )} alt="logo"  max-width="310" max-height="162" />

               </div>
               <div className="partnersName">
               <img src={verkada1} onMouseOver={e => (e.currentTarget.src = verkadaHover  )} onMouseOut={e => (e.currentTarget.src = verkada1 )} alt="logo"  max-width="310" max-height="171" />

               </div>
            </div>
        </div>
    )
}

export default HomeBodyPartners
