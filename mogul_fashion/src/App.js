import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
          
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sneakers' element={<Sneakers />} />
    <Route path='/pants' element={<Pants />} />
    <Route path='/hoodies' element={<Hoodies />} />
    <Route path='/dresses' element={<Dresses />} />
    <Route path='/skirts' element={<Skirts />} />
    <Route path='/sets' element={<Sets />} />
    <Route path='/cookie_policy' element={<CookiePolicy />} />
    <Route path='/terms_of_use' element={<TermsOfUse />} />
    </Routes>
    <Footer />
    </Router>
);
}

export default App;
