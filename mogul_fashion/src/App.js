import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Sneakers from './components/Sneakers';
import Pants from './components/Pants';
import Hoodies from './components/Hoodies';
import Dresses from './components/Dresses';
import Skirts from './components/Skirts';
import Sets from './components/Sets';
// import Footer from './components/Footer';
import ProductPage from './components/ProductPage';


function App() {

  // Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


  return (
    <Router>   
       <header className="topSection">
            {/* <Hamburger /> */}
            <img src='./MogulLogo.png' width="80" height="auto" alt='the mogo logo' className='homeLogo'></img>
            <button className='mainButton' style={{backgroundColor:'red'}}>Apparel</button>
            <button className='mainButton'>Other</button>
       </header>  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/pants' element={<Pants />} />
        <Route path='/hoodies' element={<Hoodies />} />
        <Route path='/dresses' element={<Dresses />} />
        <Route path='/skirts' element={<Skirts />} />
        <Route path='/sets' element={<Sets />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
    </Router>
);
}

export default App;
