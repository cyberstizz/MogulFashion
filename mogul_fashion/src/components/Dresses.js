import React from "react";
import './Dresses.scss';
import { Link } from 'react-router-dom';


const Dresses = () => {
    return(
        <Link to="/products"><div>these are the dresses and this links to the product page</div></Link>
    )
}

export default Dresses;