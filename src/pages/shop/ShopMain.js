import React from 'react';
import Carousel from '../../Component/Carousel/MainPageCarousel';

import Nav from '../../Component/Nav';
import CategoryList from '../../Component/CategoryList';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import Main from '../shop/Main';
import Search from '../../Component/Search';

const ShopMain = () => {
  
  
  return (
    
    <div>
      <div>
      <Carousel/>
      </div>
      <div>
      <section className='Search'>
        <Search/> 
      </section>
      </div>
      <div>
        <Main/>
        <CategoryList/>
    
      </div>
      
    </div>
  );
};

export default ShopMain;
