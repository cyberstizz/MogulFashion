import React from "react";
import './Sneakers.scss';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import SexHeader from "./SexHeader";
import SubMenuComponent from "./SubMenuComponent";


const Sneakers = () => {
    

    return(
        <React.Fragment>

            <header className='ProductTop'>
                <Hamburger />
                <span className='pantsHeader'><SexHeader header="Pants" marginLeft="4vw" /></span>
            </header>

            <nav className='subMenuFullBlock'>
                <ul className='submenuHeader'>
                    <li className='submenuNavItem'>Sneakers</li>
                    <li className='submenuNavItem'>Pants</li>
                    <li className='submenuNavItem'>Hoodies</li>
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

export default Sneakers;