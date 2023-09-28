import React from 'react';
import './Home.scss';
import Hamburger from './Hamburger.js';
import SexHeader from './SexHeader';
import HomeImage from './HomeImage';
import { Link } from 'react-router-dom';


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