import React from "react";
import './Skirts.scss';
import { Link } from 'react-router-dom';


const Skirts = () => {
    return(
        <Link to="/products"><div>these are the skirts, and this page links to the products page</div></Link>
    )
}

export default Skirts;