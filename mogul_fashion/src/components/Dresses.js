import React from "react";
import './Dresses.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from "./SubMenuComponent";



const Dresses = () => {
    return(
        <React.Fragment>

            <nav className='subMenuFullBlock'>
                <ul className='submenuHeader'>
                <Link to="/dresses"><li className='submenuNavItem'>Dresses</li></Link>
                <Link to="/skirts"><li className='submenuNavItem'>Skirts</li></Link>
                <Link to="/sets"><li className='submenuNavItem'>Sets</li></Link>
                </ul>
            </nav>
            <main className='submenuBody'>
            <Link to="/products"><SubMenuComponent name='The Hula' path='./theHula.jpeg' /></Link>
                <Link to="/products"><SubMenuComponent name='The Militia' path='./theMilitia.jpeg' /></Link>
                <Link to="/products"><SubMenuComponent name='the Tiff' path='./theTiff.jpeg' /></Link>
            </main>
           
        </React.Fragment>
    )
}

export default Dresses;