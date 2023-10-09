import React from "react";
import './SettingsPopup.scss'
import { Link } from "react-router-dom";


const SettingsPopup = () => {
    return(
      <Link to='/'> <main className="fullSettingsPopupBlock">

        <span className="comingSoon">Coming soon!</span>
        <br />
        <span className="comingSoon"> click anywhere to go back</span>



        </main></Link> 
    )
}

export default SettingsPopup;