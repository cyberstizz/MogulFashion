import React from 'react';
import './Home.scss';
import Hamburger from './Hamburger.js';
import SexHeader from './SexHeader';
import HomeImage from './HomeImage';

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


        <video width="100%" height="auto" loop="true" autoPlay muted>
          <source src="/fashionvideofinished.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <br />

        <SexHeader header="Men"/>
        <main>
        <section className='HomeImages'>
          <HomeImage title="Sneakers" imageUrl="randomSneaker.png"/>           
          <HomeImage title="pants" imageUrl="randomSneaker.png"/>
          <HomeImage title="Hoodies" imageUrl="randomSneaker.png"/>
        </section>

        <br />
        <SexHeader header="Woman"/>

        <section className='HomeImages'>
          <HomeImage title="Dresses" imageUrl="randomSneaker.png"/>           
          <HomeImage title="Skirts" imageUrl="randomSneaker.png"/>
          <HomeImage title="Sets" imageUrl="randomSneaker.png"/>
        </section>

        </main>
        
        </div>
      );
}

export default Home;