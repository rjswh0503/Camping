import React from 'react';
import DetailCarousel from '../../Component/Carousel/DetailCarousel';
import { FaShoppingCart,FaUserAlt} from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import Footer from '../../Component/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopCart from './ShopCart';
import Logo from '../../img/MainImg/Logo.png';
import detail1 from '../../img/DetailImg/1.jpg';
import detail2 from '../../img/DetailImg/2.jpg';


function ProductDetail() {

    return (
        <div className='detail-shopping'>
            <div className='main-logo'>
                <section className='logo'>
                    <h1>
                        <a href='/'>
                            <img style={{width:'170px', height:'170px'}} src={Logo}/>
                        </a>
                    </h1>
                </section>
                <section className='icon'>
                        <IoExit size={40}  />
                        <FaShoppingCart size={35} />
                        <FaUserAlt size={35} />
                </section>
            </div>
            <br/>
            <hr></hr>
            <div className='page-body'>
                <div className='thumb-info'>
                    <div className='thumb-wrap'>
                        <div className='thumb'>
                            <img src={detail1}/>
                        </div>

                    </div>
                    
                </div>

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



            <section>
                <div>

                </div>
            </section>


            <section>
                <div>

                </div>
            </section>
            
            
            <footer>
                <div>
                    <Footer/>
                </div>
            </footer>
        </div>
    )
}

export default ProductDetail;