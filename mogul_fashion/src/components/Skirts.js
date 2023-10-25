import React from "react";
import './Skirts.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from "./SubMenuComponent";



const Skirts = () => {
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
                <Link to="/products"><SubMenuComponent name='The Queen' path='./theQueen.jpeg' /></Link>
                <Link to="/products"><SubMenuComponent name='the Royalty' path='./theRoyalty.jpeg' /></Link>
                <Link to="/products"><SubMenuComponent name='the Royalty' path='./theRoyalty.jpeg' /></Link>
            </main>
           
        </React.Fragment>
    )
}

export default Skirts;