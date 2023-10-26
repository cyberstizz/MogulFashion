import React from "react";
import './ProductPage.scss';
import './Skirts.scss';
import { Link } from 'react-router-dom';


const ProductPage = (props) => {
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

            <section className="productDescription">Introducing the 'Spades Kick' — a contemporary sneaker artfully designed for the modern enthusiast. Its distinct spade patterns, intricately woven into the shoe's fabric, are a nod to classic card designs. The shoe's sleek curves, paired with its bold lace and cushioned sole, meld both comfort and style, making it a must-have for any footwear aficionado.</section>

            </main>
        </React.Fragment>
    )
}

export default ProductPage;