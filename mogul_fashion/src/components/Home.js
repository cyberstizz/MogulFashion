import React from 'react';
import './Home.scss';
import Hamburger from './Hamburger.js';
import MenHeader from './MenHeader';

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


        <video width="100%" height="auto" autoPlay muted>
          <source src="/fashionvideofinished.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <MenHeader />
        
        </div>
      );
}

export default Home;