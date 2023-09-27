import React from 'react';
import './HomeImage.scss';

const HomeImage = (props) => {
    //destructure all props
    const { title, imageUrl } = props;
    return(
        <main className='homeImageParent'>
        <img src={imageUrl} width="110" height="auto"></img>
        <section className='imageTitle'>{title}</section>
        </main>
    )
};

export default HomeImage;