import React from 'react';
import Carousel from '../../Component/Carousel/MainPageCarousel';

import Nav from '../../Component/Nav';
import CategoryList from '../../Component/CategoryList';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import Main from '../shop/Main';

const ShopMain = () => {
  
  
  return (
    
    <div>
      <div>
      <Carousel/>
      </div>
      <div>
        <Main/>
        <CategoryList/>
    
      </div>
      
    </div>
  );
};

export default ShopMain;
