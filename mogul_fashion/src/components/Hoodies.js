import React from "react";
import './Hoodies.scss';
import { Link } from 'react-router-dom';


const Hoodies = () => {
    return(
        <Link to="/products"><div>these are the hoodies, and this page links to the product page</div></Link>
    )
}

export default Hoodies;