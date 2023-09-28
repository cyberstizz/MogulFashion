import React from "react";
import './Sneakers.scss';
import { Link } from 'react-router-dom';


const Sneakers = () => {
    return(
        <Link to="/products"><div>these are the sneakers and this links to the product page</div></Link>
    )
}

export default Sneakers;