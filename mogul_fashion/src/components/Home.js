import React from 'react';
import './Home.scss';
// import Hamburger from './Hamburger.js';
import SexHeader from './SexHeader';
import HomeImage from './HomeImage';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
        <header className="topSection">
            {/* <Hamburger /> */}
            <img src='./MogulLogo.png' width="80" height="auto" alt='the mogo logo' className='homeLogo'></img>
            <button className='mainButton' style={{backgroundColor:'red'}}>Apparel</button>
            <button className='mainButton'>Other</button>
        </header>


        <video width="100%" height="auto" loop="true" autoPlay muted>
          <source src="/fashionvideofinished.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <br />

        {/* <img src='./MogulLogo.png' width="100" height="auto" alt='the mogo logo' className='homeLogo'></img> */}

        <SexHeader header="Men"/>
        <main>
          <section className='HomeImages'>
            <Link to='/sneakers'><HomeImage title="sneakers" imageUrl="randomSneaker.png"/></Link>         
            <Link to='/pants'><HomeImage title="pants" imageUrl="randomSneaker.png"/></Link> 
            <Link to='/hoodies'><HomeImage title="hoodies" imageUrl="randomSneaker.png"/></Link> 
          </section>

          <br />
          <SexHeader header="Woman"/>

          <section className='HomeImages'>
            <Link to='/dresses'><HomeImage title="dresses" imageUrl="randomSneaker.png"/></Link>           
            <Link to='/skirts'><HomeImage title="skirts" imageUrl="randomSneaker.png"/></Link>
            <Link to='/sets'><HomeImage title="sets" imageUrl="randomSneaker.png"/></Link>
          </section>

        </main>
        
        </div>
      );
}

export default Home;