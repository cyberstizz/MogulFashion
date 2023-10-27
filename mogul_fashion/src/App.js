import './App.scss';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Sneakers from './components/Sneakers';
import Pants from './components/Pants';
import Hoodies from './components/Hoodies';
import Dresses from './components/Dresses';
import Skirts from './components/Skirts';
import Sets from './components/Sets';
import Footer from './components/Footer'
// import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import SettingsPopup from './components/SettingsPopup';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';


function App() {

const [storeMode, setStoremode] = useState('apparelMode');


  return (
    <Router>   
      <ScrollToTop />
      <header className="topSection">
            {/* <Hamburger /> */}
            <Link to='/settingsMenu' style={{ textDecoration: 'none', color: 'inherit', overflow: 'hidden' }}><img src='./MogulLogo.png' width="100" height="auto" alt='the mogo logo' className='homeLogo'></img></Link>
            { storeMode === 'apparelMode' ? (
            <React.Fragment>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><button onClick={() => setStoremode('apparelMode')} className='ApparelButton'>Apparel</button></Link>
            <Link to='/pants' style={{ textDecoration: 'none', color: 'inherit' }}><button onClick={() => setStoremode('otherMode')} className='clothesButton'>Other</button></Link> 
            </React.Fragment>
            ) : (
            <React.Fragment>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><button onClick={() => setStoremode('apparelMode')} className='otherApparelButton'>Apparel</button></Link>
            <Link to='/pants' style={{ textDecoration: 'none', color: 'inherit' }}><button onClick={() => setStoremode('otherMode')} className='otherClothesButton'>Other</button></Link>
            </React.Fragment>
            )}
       </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/pants' element={<Pants />} />
        <Route path='/hoodies' element={<Hoodies />} />
        <Route path='/dresses' element={<Dresses />} />
        <Route path='/skirts' element={<Skirts />} />
        <Route path='/sets' element={<Sets />} />
        <Route path='/products/:productId' element={<ProductPage />} />
        <Route path='/settingsMenu' element={<SettingsPopup />} />
      </Routes>
      <Footer />
    </Router>
);
}

export default App;
