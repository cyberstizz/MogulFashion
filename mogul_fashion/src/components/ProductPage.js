import React from "react";
import './ProductPage.scss';
import './Skirts.scss';
import { useNavigate, useParams } from 'react-router-dom';
import AllProducts from "./AllProducts";


const ProductPage = () => {
    const navigate = useNavigate();

    const { productId } = useParams();

    const handleBackClick = () => {
        navigate(-1);
    }

    
    const theItem = AllProducts[productId]

    const {title, headline, imagePath, description} = theItem;

    console.log(title)

    return(
        <React.Fragment>
            <i onClick={handleBackClick} style={{cursor: 'pointer'}} className="fa fa-arrow-left custom-arrow" aria-hidden="true"></i>
            <section className="underSearchBar"></section>
            <main className="entireProductCard">
            <div className="headerWrapper">
                <header className="productFont">{title}</header>
                <div className="headerFooter"></div>
            </div>
            <section className="headlineText">{headline}</section>
            <div className="headerWrapper">
                <img className="productImage" src={imagePath} alt={`a ${title}`} />
                <div className="headerFooterImage"></div>
            </div>

            <section className="headlineText">Product Details</section>

            <section className="productDescription">{description}</section>

            </main>
        </React.Fragment>
    )
}

export default ProductPage;