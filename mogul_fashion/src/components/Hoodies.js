import React from "react";
import './Hoodies.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from "./SubMenuComponent";



const Hoodies = () => {
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
            <Link to="/products"><SubMenuComponent name='blue jeans'/></Link>
            <Link to="/products"><SubMenuComponent name='blue jeans' /></Link>
            <Link to="/products"><SubMenuComponent name='blue jeans' /></Link>
            </main>
           
        </React.Fragment>
    )
}

export default Hoodies;