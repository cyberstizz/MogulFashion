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
            <Link to="/products"><div>these are the pants, and this page links to the products page</div></Link>

        </React.Fragment>
    )
}

export default Pants;