import React from 'react';
import Carousel from '../../Component/Carousel/MainPageCarousel';
import { FaShoppingCart,FaUserAlt} from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import Main from './Main';
import Nav from '../../Component/Nav';
import CategoryList from '../../Component/CategoryList';
import Footer from '../../Component/Footer';
import Tent from './Tent';
import Sleeping from './Sleeping';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopCart from './ShopCart';
import Logo from '../../img/MainImg/Logo.png'




const ShopMain = () => {


    return (
            
                <div className='main-shopping'>
                        <div className='main-logo'>
                            <section className='logo'>
                            <h1>
                                
                                <a href='/'>
                                    <img style={{width:'170px', height:'170px'}} src={Logo}/>
                                </a>
                            </h1>
                            </section>
                            <section className='icon'>
                                <a href='/'>
                                <IoExit size={40}/>
                                </a>
                                <a href='/'>
                                    <FaShoppingCart size={35}/>
                                </a>
                                <a href='/'>
                                <FaUserAlt size={35}/>
                                </a>
                            </section>
                        </div>
                        <br/>
                        <hr></hr>
                        <div className='main-carousel'>
                            {<Carousel/>}
                        </div>     
                        <div>
                            <Router>
                                    <Routes>
                                        <Route path='/shopcart' element={<ShopCart />}/>
                                    </Routes>
                            </Router>
                        </div>
                        <br/>
                        <br/>

                        <nav>
                            <Nav/>
                            
                        {/*
                            카테고리 자리
                        */}
                        </nav>
                        <Router>
                            <div className='Category'>
                                <Routes>
                                    <Route path='/' element={<Main/>}/>
                                </Routes>
                                <Routes>
                                    <Route path='/' element={<CategoryList/>}/>
                                </Routes>
                                <Routes>
                                    <Route path='/tent' element={<Tent />}/>
                                </Routes>
                                <Routes>
                                    <Route path='/sleeping' element={<Sleeping />}/>
                                </Routes>
                                
                            </div>
                        </Router>
                    <footer>
                        <div>
                            <Footer />
                        </div>
                    </footer>
            </div>
            
        
    )

}

export default ShopMain;