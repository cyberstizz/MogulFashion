import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
          
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/newArrivals' element={<NewArrivals />} />
    <Route path='/bestSellers' element={<BestSellers />} />
    <Route path='/discounts' element={<Discounts />} />
    <Route path='/search/:query' element={<Search />} />
    <Route path='/products/:productId' element={<ProductDescription />} />
    <Route path='/createPage' element={<CreatePage />} />
    <Route path='/deletePage' element={<DeletePage />} />
    <Route path='products/:user/Cart/:user' element={<Cart />} />
    <Route path='/test' element={<TestPage />} />
    <Route path='/Cart/:user' element={<Cart />} />
    <Route path='/success' element={<Success />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/about_us' element={<AboutUs />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/privacy_policy' element={<PrivacyPolicy />} />
    <Route path='/cookie_policy' element={<CookiePolicy />} />
    <Route path='/terms_of_use' element={<TermsOfUse />} />





    </Routes>
    <Footer />
    </Router>
);
}

export default App;
