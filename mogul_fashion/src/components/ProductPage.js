import React from "react";
import './ProductPage.scss';
import './Skirts.scss';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import SexHeader from './SexHeader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProductPage = () => {
    return(
        <React.Fragment>
            <header className='ProductTop'>
                <Hamburger />
                <span className='pantsHeader'><SexHeader header="Pants" marginLeft="4vw" /></span>
            </header>
            <section className="searchBar">Search</section>

            <Link to="/"><div>these is the product page, and this page links back home</div></Link>
        </React.Fragment>
    )
}

export default ProductPage;