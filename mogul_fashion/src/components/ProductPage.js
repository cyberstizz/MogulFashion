import React from "react";
import './ProductPage.scss';
import './Skirts.scss';
import { Link } from 'react-router-dom';


const ProductPage = () => {
    return(
        <React.Fragment>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <section className="underSearchBar"></section>
            <main className="entireProductCard">
            <div className="headerWrapper">
                <header className="productFont">Spades</header>
                <div className="headerFooter"></div>
            </div>
            <section className="headlineText">Combining athleticism with style</section>
            <div className="headerWrapper">
                <img className="productImage" src="./spades.jpeg" />
                <div className="headerFooterImage"></div>
            </div>

            <section className="headlineText">Product Details</section>

            </main>
        </React.Fragment>
    )
}

export default ProductPage;