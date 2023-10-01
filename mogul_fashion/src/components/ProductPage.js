import React from "react";
import './Skirts.scss';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return(
        <React.Fragment>
        <header className='ProductTop'>
        <Hamburger />
        <span className='pantsHeader'><SexHeader header="Pants" marginLeft="4vw" /></span>
    </header>
        <Link to="/"><div>these is the product page, and this page links back home</div></Link>
        </React.Fragment>
    )
}

export default ProductPage;