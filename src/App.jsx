
import './App.css'
import Home from './assets/Components/Home';
import Cart from './assets/Components/Cart';
import PlaceOrder from './assets/Components/PlaceOrder';
import Success from './assets/Components/SuccessPage';
import Navbar from './assets/Components/Navbar';
import {Route, Routes, useLocation} from 'react-router-dom'
import ExploreMenu from './assets/Components/ExploreMenu';

import FoodDisplay from './assets/Components/FoodDisplay';
import { useState } from 'react';
import Footer from './assets/Components/Footer';
import AppDownload from './assets/Components/AppDownload';
import Login from './assets/Components/Login';
import Contact from './assets/Components/Contact';
import Resturant from './assets/Components/Resturant';
import ScrollToTop from './assets/Components/ScrollToTop';
// import ResturentDisplay from './assets/Components/ResturentDisplay';
function App() {
  const [category, setCategory] = useState("All");
  const [showlogin, setShowlogin] = useState(false);
  const location = useLocation();
      
  return (
    <>
    {showlogin?<Login setShowlogin={setShowlogin}/>:<></>}
    <div>
      <ScrollToTop/>
     <Navbar setShowlogin={setShowlogin}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resturant' element={<Resturant/>}/>
      {/* <Route path="/restaurant/:slug" element={<ResturentDisplay />} /> */}
     </Routes>
     {location.pathname === '/' && (
      <>
      <ExploreMenu category={category} setCategory={setCategory}/> 
     <FoodDisplay category={category}/>
     <AppDownload/>
      </>
     )}
    </div>
    <Footer/>
    </>
  );
}

export default App
