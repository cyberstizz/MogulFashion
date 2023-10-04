import React from "react";
import './ProductPage.scss';
import './Skirts.scss';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import SexHeader from './SexHeader';


const ProductPage = () => {
    return(
        <React.Fragment>
            <header className='ProductTop'>
                <Hamburger />
                <span className='pantsHeader'><SexHeader header="Pants" marginLeft="4vw" /></span>
            </header>
            <section className="searchBar"><i class="fa fa-search" aria-hidden="true" style={{fontSize: "30px", marginLeft: "2vw", marginTop: "1vh"}}></i> <span style={{marginLeft: "3vw", fontSize: "35px"}}>Search</span></section>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <section className="underSearchBar"></section>
            <Link to="/"><div>these is the product page, and this page links back home</div></Link>
        </React.Fragment>
    )
}

export default ProductPage;