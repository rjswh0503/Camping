import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../../../css/Shop/ShopDetail/ShopDetail.css';
import Footer from '../../../Component/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Header from '../../../Component/Header';
import ShopReview from './ShopReview';
import ShopMore from './ShopMore';
import ShopInquiry from './ShopInquiry';

const ShopDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/main/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchData();
  }, [productId]);

  const handleHeart = () => {
    setLike(!like);
  };

  return (
    <div className='main-shopping'>
      <Header />
      <div className='main-section1'>
        <Router>
          <div className='main-section2'>
            <main className='main-section3'>
              {product ? (
                <>
                  <div className='main-img'></div>
                  <section className='right-section'>
                    <div className='right-section2'>무료배송</div>
                    <div className='right-section3'>
                      <h1 className='right-section-title'>{product.productName}</h1>
                      <h2 className='right-section-title2'>{product.productDescription}</h2>
                    </div>
                    <span className='right-section-sapn4'>
                      <span>{product.productPrice} 원</span>
                    </span>
                    <div className='right-section-login'>
                      로그인 후, 적립 혜택이 제공됩니다.
                    </div>
                    <div>
                      <div className='right-section-img'>
                        <img src={product.productThumbnail} alt={product.productName} />
                      </div>
                    </div>
                    <ul className='right-section-ul'>
                      <li className='right-section-li'>
                        <dt className='right-section-dt'>배송</dt>
                        
                      </li>
                    </ul>

                    <div className='right-section-footer'>
                      <button className='right-section-footer-button1' type='button' style={{width:'56',height:'56', radius:'3'}}>
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
                    </div>
                  </section>
                </>
              ) : (
                <p>상품을 찾을 수 없습니다.</p>
              )}
            </main>
            
            <nav className='nav-first'>
              <ul className='nav-first-ul'>
                <li className='nav-first-ul-li'>
                  <Link to='/more/44'><span className='nav-first-ul-li-a-span'>상세정보</span></Link>
                </li>
                <li className='nav-first-ul-li'>
                  <Link to='/review'><span className='nav-first-ul-li-a-span'>후기</span></Link>
                  <span className='nav-first-ul-li-a-span-count'></span>
                </li>
                <li className='nav-first-ul-li'>
                  <Link to='/inquiry'><span className='nav-first-ul-li-a-span'>문의</span></Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='Footer'>
            <Routes>
              <Route path='/review' element={<ShopReview productId={productId}/>}/>
            </Routes>
            <Routes>
              <Route path='/more' element={<ShopMore productId={productId}/>}/>
            </Routes>
            <Routes>
              <Route path='/inquiry' element={<ShopInquiry/>}/>
            </Routes>
            <Footer/>
          </div>
        </Router> 
      </div>
    </div>
  );
}

export default ShopDetail;
