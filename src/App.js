// App.js

import React from 'react';
import './App.css';
import ShopDetail from './pages/shop/ShopDetail/ShopDetail';
import Main from './pages/shop/ShopMain';
import OrderMain from './pages/shop/ShopOrder/OrderMain';
import AddMain from './pages/shop/ShopSell/SellMain';
import SellMain from './pages/shop/ShopSell/SellMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import ShopCart from './pages/shop/ShopCart';
import ShopMain from './pages/shop/ShopMain';
import Carousel from './Component/Carousel/MainPageCarousel';
import CategoryList from './Component/CategoryList';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Nav/>
          <Routes>
            <Route path="/" element={<ShopMain/>}/>
            <Route path="/main" element={<Main/>} />
            <Route path="/main/category" element={<CategoryList/>}/>
            <Route path="/detail" element={<ShopDetail/>} />
            <Route path="/order" element={<OrderMain/>} />
            <Route path="/sell" element={<SellMain/>} />
            <Route path="/cart" element={<ShopCart/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
