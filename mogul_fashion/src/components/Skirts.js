import React from "react";
import './Skirts.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from "./SubMenuComponent";



const Skirts = () => {
    return(
        <React.Fragment>


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

export default Skirts;