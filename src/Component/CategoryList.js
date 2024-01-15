import React from 'react';
import img2 from '../img/123.jpeg';
import img3 from '../img/1234.jpeg';
import img4 from '../img/1.jpg';
import { CiShoppingBasket } from "react-icons/ci";
import '../css/ShopMain.css';


const CategoryList = () => {

    return (
        <div className='category-item' style={{display:'flex', justifyContent:'center'}}>
            
            <section>
                <h6 style={{display:'flex',justifyContent:'start'}}>카테고리별 아이템</h6>
                <ul className='swiper-wrapper'>
                    <li className='swiper-slide swiper-slide-active'style={{
                        width: "272.5px", 
                        marginright: "30px",
                        }}>
                        <a href="">
                        <div className='imgWrap'>
                            <img src={img2} className='imgs'/>
                        </div>
                        <div className='textWrap'>
                            <p className='companyName'>파이브가이즈</p>
                            <p className='itemName1'>파이브가이즈 전용 침낭</p>
                                <div className='itemsPrice clearfix'>
                                    <div className='fr'>
                                        <strong className='customerPrice'></strong>
                                        <strong className='sellPrice'>70,000</strong>

                                    </div>
                                </div>
                        </div>
                        </a>
                            <div className='itemFooter clearfix'>
                                <div className='fl'>
                                    <span className='basketBtn'>
                                        <a href=''>
                                        <CiShoppingBasket size={20} />
                                        </a>
                                    </span>
                                    <span className='reviewCnt'>리뷰2</span>
                                    
                                </div>
                                <div className='fr'></div>
                            </div>
                    </li>
                    <li className='swiper-slide swiper-slide-active'style={{
                        width: "272.5px", 
                        marginright: "30px",
                        }}>
                        <a href="">
                        <div className='imgWrap'>
                            <img src={img3} className='imgs'/>
                        </div>
                        <div className='textWrap'>
                            <p className='companyName'>파이브가이즈</p>
                            <p className='itemName1'>파이브가이즈 전용 침낭</p>
                                <div className='itemsPrice clearfix'>
                                    <div className='fr'>
                                        <strong className='customerPrice'></strong>
                                        <strong className='sellPrice'>54,000</strong>

                                    </div>
                                </div>
                        </div>
                        </a>
                            <div className='itemFooter clearfix'>
                                <div className='fl'>
                                    <span className='basketBtn'>
                                        <a href=''>
                                        <CiShoppingBasket size={20} />
                                        </a>
                                    </span>
                                    <span className='reviewCnt'>리뷰20</span>
                                </div>
                                <div className='fr'></div>
                            </div>
                    </li>
                    <li className='swiper-slide swiper-slide-active'style={{
                        width: "272.5px", 
                        marginright: "30px",
                        }}>
                        <a href="">
                        <div className='imgWrap'>
                            <img src={img4} className='imgs'/>
                        </div>
                        <div className='textWrap'>
                            <p className='companyName'>램프</p>
                            <p className='itemName1'>파이브가이즈 전용 램프</p>
                                <div className='itemsPrice clearfix'>
                                    <div className='fr'>
                                        <strong className='customerPrice'></strong>
                                        <strong className='sellPrice'>94,000</strong>

                                    </div>
                                </div>
                        </div>
                        </a>
                            <div className='itemFooter clearfix'>
                                <div className='fl'>
                                    <span className='basketBtn'>
                                        <a href=''>
                                        <CiShoppingBasket size={20} />
                                        </a>
                                    </span>
                                    <span className='reviewCnt'>리뷰20</span>
                                </div>
                                <div className='fr'></div>
                            </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default CategoryList;