import React from 'react';
import img1 from '../img/MainImg/캠핑 메인페이지 이미지.webp';
import { CiShoppingBasket } from "react-icons/ci";
import '../css/ShopMain.css';

import axios from 'axios';

const ProductList = () => {

  


    return (
        <div>
            <div className='new-item' style={{display:'flex', justifyContent:'center'}}>
                <section>
                <h6>New Items</h6>
                    <ul className='swiper-wrapper'>
                        <li className='swiper-slide swiper-slide-active'style={{
                            width: "272.5px", 
                            marginright: "30px",
                            }}>
                            <a href="">
                            <div className='imgWrap'>
                                <img src={img1} className='imgs'/>
                            </div>
                            <div className='textWrap'>
                                <p className='companyName'>파이브가이즈</p>
                                <p className='itemName1'>파이브가이즈 전용</p>
                                    <div className='itemsPrice clearfix'>
                                        <div className='fr'>
                                            <strong className='customerPrice'></strong>
                                            <strong className='sellPrice'>34,000</strong>
                                        </div>
                                    </div>
                            </div>
                            </a>
                                
                        </li>
                    </ul>
                </section>
            </div>
        </div> 
    )
}

export default ProductList;