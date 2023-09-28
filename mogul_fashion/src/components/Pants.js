import React from 'react';
import './Pants.scss';
import SexHeader from './SexHeader';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';



const Pants = () => {


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

            </main>



            <Link to="/products"><div>these are the pants, and this page links to the products page</div></Link>

        </React.Fragment>
    )
}

export default Pants;