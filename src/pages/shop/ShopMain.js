import React, {useState, useEffect} from 'react';
import Carousel from '../../Component/Carousel';
import { FaShoppingCart,FaUserAlt} from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import ProductList from '../../Component/ProductList';
import Nav from '../../Component/Nav';
import CategoryList from '../../Component/CategoryList';
import Footer from '../../Component/Footer';

const ShopMain = () => {

    return (
        <div className='main-shopping'>
            <div className='main-logo'>
                <section className='logo'>
                <h1>Logo</h1>
                </section>
                <section className='icon'>
                    <IoExit size={40}  />
                    <FaShoppingCart size={35} />
                    <FaUserAlt size={35} />
                </section>
            </div>
            <br/>
            <hr></hr>

            <div className='main-carousel'>
                {<Carousel/>}
            </div>
            <br/>
            <br/>

            <nav>
                <Nav/>
             {/*
                카테고리 자리
             */}
            </nav>
            
            {/*
                신상품 리스트 
             */}

            <section>
                <ProductList/>
            </section>
            
            <section>
                <CategoryList/>
            </section>
        <fotter>
            <div>
                <Footer />
           

            </div>
            
        </fotter>


        

        </div>
    )

}

export default ShopMain;