import React from "react";
import './Sets.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from "./SubMenuComponent";


const Sets = () => {
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
                <Link to="/products/theGarterSet"><SubMenuComponent name='The Garter Set' path='./theGarterSet.png' /></Link>
                <Link to="/products/theGarterSet"><SubMenuComponent name='The Garter Set' path='./theGarterSet.png' /></Link>
                <Link to="/products/theGarterSet"><SubMenuComponent name='The Garter Set' path='./theGarterSet.png' /></Link>
            </main>
           
        </React.Fragment>
    )
}

export default Sets;