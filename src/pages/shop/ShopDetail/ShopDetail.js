import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../../css/Shop/ShopDetail/ShopDetail.css';
import Footer from '../../../Component/Footer';
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import ShopCart from '../ShopCart';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Header from '../../../Component/Header';
import ShopReview from './ShopReview';
import ShopMore from './ShopMore';
import ShopInquiry from './ShopInquiry';




const ShopDetail = () => {



    /*  좋아요 */
    const [like, setLike] = useState(false);

    const handleHeart = () => {
        setLike(!like);
    }




    return(
        
        <div className='main-shopping'>
        
            <Header/>
         
        <div className='main-section1'>
        <Router>
            <div className='main-section2'>
                <main className='main-section3'>
                    <div className='main-img'></div>
                    <section className='right-section'>
                        <div className='right-section2'>무료배송</div>
                        <div className='right-section3'>
                            <h1 className='right-section-title'>[텐트의자] 휴대성과 편안함의 완벽한 조합, 최고급 캠핑 의자</h1>
                            <h2 className='right-section-title2'>라면먹을 때 좋아요!</h2>
                        </div>
                        <h2 className='right-section-title3'>
                            <sapn className='right-section-sapn'>
                                37
                                %
                            </sapn>
                            <sapn className='right-section-sapn2'>3,700</sapn>
                            <sapn className='right-section-sapn3'>원</sapn>
                        </h2>
                        <span className='right-section-sapn4'>
                            <span>
                                5,900
                                원
                            </span>
                        </span>
                        <p className='right-section-p'>
                            원산지:
                            상품설명/상세정보 참조
                        </p>
                        <div className='right-section-login'>
                            로그인 후, 적립 혜택이 제공됩니다.
                        </div>
                        <div>
                            <div className='right-section-img'>

                            </div>
                        </div>
                        <ul className='right-section-ul'>
                            <li className='right-section-li'>
                                <dt className='right-section-dt'>배송</dt>
                                <dd className='right-section-dd'>
                                    <p className='right-section-dd-p'>당일배송</p>
                                    <p className='right-section-dd-p'>
                                        22시 전 주문 시 내일 아침 7시 도착
                                    </p>
                                </dd>
                            </li>
                            <li className='right-section-li'>
                                <dt className='right-section-dt'>판매자</dt>
                                    <dd className='right-section-dd'>
                                        <p className='right-section-dd-p'>Camply</p>
                                    </dd>
                            </li>
                            <li className='right-section-li'>
                                <dt className='right-section-dt'>판매단위</dt>
                                    <dd className='right-section-dd'>
                                        <p className='right-section-dd-p'>1개</p>
                                    </dd>
                            </li>
                            <li className='right-section-li'>
                                <dt className='right-section-dt'>중량/용량</dt>
                                        <dd className='right-section-dd'>
                                            <p className='right-section-dd-p'>10kg 내외</p>
                                        </dd>
                            </li>
                            <li className='right-section-li'>
                                <dt className='right-section-dt'>안내사항</dt>
                                            <dd className='right-section-dd'>
                                                <p className='right-section-dd-p'>응 없어</p>
                                            </dd>
                            </li>
                        </ul>
                        
                        <div className='right-section-footer'>
                            <div className='right-section-footer-div'>
                                <li className='right-section-li'>
                                <dt className='right-section-dt'>상품선택</dt>
                                            <dd className='right-section-dd'>
                                                <div className='cart-option-item'>
                                                    <div className='right-section-footer-select'>
                                                        <span className='right-section-footer-span'>
                                                        [텐트의자] 편안함
                                                        </span>
                                                    </div>
                                                    <span className='right-section-footer-span2'>
                                                        적립제외상품
                                                    </span>
                                                    <div className='right-section-footer-div'>
                                                        <div className='right-section-footer-div-1'>
                                                            <button type='button' aria-label='수량내리기'
                                                            disabled className='button-disabled'></button>
                                                            <div className='button-div'>1</div>
                                                            <button type='button' aria-label="수량올리기"
                                                             className='buttn-2'></button>
                                                        </div>
                                                        <div className='right-section-footer-div2'>
                                                            <span className='right-section-footer-div2-span'>
                                                                5,900
                                                                원
                                                            </span>
                                                            <span className='right-section-footer-div2-span2'>
                                                                3,700
                                                                원
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </dd>
                                </li>
                            </div>
                            <div className='right-section-footer-div3'>
                                <div className='right-section-footer-div3-div'>
                                    <div className='right-section-footer-div3-div-div1'>
                                        <span className='right-section-footer-div3-span'>총 상품금액 :</span>
                                        <span className='right-section-footer-div3-span2'>3,700</span>
                                        <span className='right-section-footer-div3-span3'>원</span>
                                    </div>
                                    <div className='right-section-footer-div3-div2'>
                                        <span className='right-section-footer-div3-div2-span'>적립</span>
                                        <span className='right-section-footer-div3-div2-span2'>로그인 후, 적립 혜택 제공</span>

                                    </div>
                                </div>
                            </div>
                            <div className='right-section-footer-button'>
                                <button className='right-section-footer-button-button1' type='button' style={{width:'56',height:'56', radius:'3'}}>
                                    <sapn className='right-section-footer-button-span'>
                                        <div className='like'  onClick={handleHeart}>
                                            {like ? (
                                                <AiFillHeart style={{ color:'#FEA92A', fontSize:'30px'}}/>
                                            ) :
                                            (
                                                <AiOutlineHeart style={{fontSize: '30px'}}/>
                                            )}
                                        </div>
                                    </sapn>
                                </button>
                                <button className='right-section-footer-button1' type='button' disabled style={{width:'56', height:'56', radius:'3'}}>
                                    <span className='right-section-footer-button-span2'>
                                        <img src='' alt className='zzim'></img>
                                    </span>
                                </button>
                                <div className='right-section-footer-button-div'>
                                    <button className='right-section-footer-button-div-button' type='button' style={{radius:'3'}}>
                                        <span className='right-section-footer-button-span2'>장바구니 담기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
                    <nav className='nav-first'>
                        <ul className='nav-first-ul'>
                            <li className='nav-first-ul-li'>
                                <a className='nav-first-ul-li-a'>
                                <Link to='/more'><sapn className='nav-first-ul-li-a-span'>상세정보</sapn></Link>
                                
                                
                                </a>
                            </li>
                            <li className='nav-first-ul-li'>
                                <a className='nav-first-ul-li-a'>
                                    <Link to='/review'><span className='nav-first-ul-li-a-span'>후기</span></Link>
                                   
                                    <span className='nav-first-ul-li-a-span-count'></span>
                                </a>
                            </li>
                            <li className='nav-first-ul-li'>
                                <a className='nav-first-ul-li-a'>
                                   <Link to='/inquiry'><sapn className='nav-first-ul-li-a-span'>문의</sapn></Link>
                                </a>
                            </li>
                        </ul>
                    </nav>
                
            </div>
           <div className='Footer'>
            <Routes>
                <Route path='/review' element={<ShopReview/>}/>
            </Routes>
            <Routes>
                <Route path='/more' element={<ShopMore/>}/>
            </Routes>
            <Routes>
                <Route path='/inquiry' element={<ShopInquiry/>}/>
            </Routes>
           <Footer/>
           </div>
           </Router> 
            </div>
           
        </div>
        



    )
}


export default ShopDetail;