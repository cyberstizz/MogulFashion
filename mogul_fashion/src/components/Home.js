import React from 'react';
import './Home.scss';
import Hamburger from './Hamburger.js';

const Home = () => {
    return (
        <div>
        <header className="topSection">
        {/* <nav className="hamburger">

        </nav> */}
        <Hamburger />

        <button className='mainButton'>Apparel</button>

        <button className='mainButton'>Other</button>

        </header>
        
        </div>
      );
}

export default Home;