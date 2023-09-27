import React from 'react';
import './HomeImage.scss';

const HomeImage = (props) => {
    //destructure all props
    const { title, imageUrl } = props;
    return(
        <React.Fragment>
        <img src={imageUrl} width="115" height="70"></img>
        <section>{title}</section>
        </React.Fragment>
    )
};

export default HomeImage;