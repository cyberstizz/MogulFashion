import React from "react";
import './Sneakers.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from "./SubMenuComponent";


const Sneakers = () => {
    

    return(
        <React.Fragment>


            <nav className='subMenuFullBlock'>
                <ul className='submenuHeader'>
                <Link to="/sneakers"><li className='submenuNavItem'>Sneakers</li></Link>
                <Link to="/pants"><li className='submenuNavItem'>Pants</li></Link>
                <Link to="/hoodies"><li className='submenuNavItem'>Hoodies</li></Link>
                </ul>
            </nav>
            <main className='submenuBody'>
            <Link to="/products/spades"><SubMenuComponent name='spades' path='./spades.jpeg' /></Link>
            <Link to="/products/southOxford"><SubMenuComponent name='SouthOxford' path='./SouthOxford.jpg' /></Link>
            <Link to="/products/maz"><SubMenuComponent name='maz' path='./maz.jpeg' /></Link>
            </main>
           
        </React.Fragment>
    )
}

export default Sneakers;