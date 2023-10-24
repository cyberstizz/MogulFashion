import React from "react";
import './SettingsPopup.scss'
import { Link } from "react-router-dom";


const SettingsPopup = () => {
    return(
      <Link to='/'> <nav className="fullSettingsPopupBlock">
        <header></header>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit', overflow: 'hidden' }}><img src='./MogulLogo.png' height="auto" alt='the mogo logo' className='thisHomeLogo'></img></Link>
        <ul classname>
        <li className="comingSoon">Home</li>
        <li className="comingSoon">Pants</li>
        <li>sneakers</li>
        <li>pants</li>
        <li>hoodies</li>
        <li>dresses</li>
        <li>skirts</li>
        <li>sets</li>

        </ul>


        </nav></Link> 
    )
}

export default SettingsPopup;