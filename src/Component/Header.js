// Header.js

import React from 'react';
import Logo from '../img/MainImg/Logo.png';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { IoExit } from 'react-icons/io5';
import { Link, Routes, Route } from 'react-router-dom';
import ShopCart from '../pages/shop/ShopCart';
import ShopMain from '../pages/shop/ShopMain';
import Search from '../Component/Search';
import  Carousel from '../Component/Carousel/MainPageCarousel';

const Header = () => {
  return (
    <div>
      <div className='main-logo'>
        <section className='logo'>
          <h1>
            <Link to='/'>
              <img style={{ width: '170px', height: '170px' }} src={Logo} />
            </Link>
          </h1>
        </section>
        
        <section className='icon'>
          <Link to='/logout'>
            <IoExit size={40} />
          </Link>
          <Link to='/cart'>
            <FaShoppingCart size={35} />
          </Link>
          <Link to='/mypage'>
            <FaUserAlt size={35} />
          </Link>
        </section>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
