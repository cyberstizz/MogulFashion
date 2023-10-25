import React from 'react';
import './Pants.scss';
import { Link } from 'react-router-dom';
import SubMenuComponent from './SubMenuComponent';



const Pants = () => {


    return(
        <React.Fragment>

            <nav className='subMenuFullBlock'>
                <ul className='submenuHeader' style={{ textDecoration: 'none', overflow: 'visible'}}>
                <Link to="/sneakers"><li className='submenuNavItem'>Sneakers</li></Link>
                <Link to="/pants"><li className='submenuNavItem'>Pants</li></Link>
                <Link to="/hoodies"><li className='submenuNavItem'>Hoodies</li></Link>
                </ul>
            </nav>
            
            <main className='submenuBody'>
            <Link to="/products"><SubMenuComponent name='Jamaaca' path='./jamaacaJeans.jpeg' /></Link>
            <Link to="/products"><SubMenuComponent name='ColorVienz' path='./colorVienzJeans.png' /></Link>
            <Link to="/products"><SubMenuComponent name='MogulPants' path='./mogulPants.jpg' /></Link>
            </main>
           
        </React.Fragment>
    )
}

export default Pants;