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
            <div className='outlet'>
                <div className='Detail-product'>
                    <div className='Detail-product-container'>
                        <div className='Detail-imgarea'>
                            <img style={{width:'100%'}} src={detail1} alt='조명1'/>
                            <img style={{width:'100%'}} src={detail2} alt='조명2'/>
                        </div>
                        <div className='Detail-menu'>
                            <div className='Detail-fixed'>
                                <div className='Detail-info'>
                                    <h4 className='Detail-title'>
                                        파이브가이즈 조명
                                    </h4>
                                    <p className='Detail-desc'>파이브가이즈 전용 조명</p>
                                </div>
                                <div className='Detail-total'>
                                    <div className='Detail-countWrap'>
                                        <p>구매수량</p>
                                        <div className='Detail-count'>
                                            <button>-</button>
                                            <p>1</p>
                                            <button>+</button>
                                        </div>
                                        <div className='Detail-totalprice'>
                                            <p>총 상품 금액</p>
                                            <p>
                                                "₩"
                                                "18,000"
                                                "원"
                                            </p>
                                        </div>
                                        <div className='Detail-button'>
                                            <button type="button" className='btn_button1'>
                                                <span>장바구니</span>
                                            </button>
                                            <button type="button" className='btn_button2'>
                                                <span>구매하기</span>
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>



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