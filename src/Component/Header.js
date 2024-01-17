import React from 'react';
import Logo from '../img/MainImg/Logo.png';
import { FaShoppingCart,FaUserAlt} from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShopCart from '../pages/shop/ShopCart';
import ShopMain from '../pages/shop/ShopMain';

const Header = () => {


    return(
        <div>
            <Router>
                <div className='main-logo'>
                
                                <section className='logo'>
                                <h1>
                                    
                                     <Link to='/home'>
                                        <img style={{width:'170px', height:'170px'}} src={Logo}/>
                                    </Link>
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
                            <div>
                                
                                        <Routes>
                                            <Route path='/shopcart' element={<ShopCart />}/>
                                        </Routes>
                                        <Routes>
                                            <Route path='/home' element={<ShopMain />}/>
                                        </Routes>
                </div>
                    </Router>       
                            <br/>
                            <br/>
                    
        </div>
        
    )

}

export default Header;