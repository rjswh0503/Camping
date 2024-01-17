import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../css/Shop/ShopMain.css';
import { CiShoppingBasket } from "react-icons/ci"; 
import img1 from '../../img/MainImg/3.jpg';



const Main = () => {
  const [product, setProducts] = useState([]);
  const [productId, setProductId]= useState(12);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/main/mainpage/${productId}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("데이터없음", error);
      });
  }, [productId]);

  const handleProductIdChange = (newProductId) => {
    setProductId(newProductId);
  };
  return (
    <div className='category-item' style={{display:'flex', justifyContent:'center'}}>
      
        {product ? (
            <div key={product}>
            <section>  
              <h2 style={{display:'flex', justifyContent:'center'}}>New Item</h2><br/> 
                <ul className='swiper-wrapper'>
                  <li className='swiper-slide swiper-slide-active'style={{
                                      width: "272.5px", 
                                      marginright: "30px",
                                      }}>
                         <a href='/'>               
                          <div className='imgWrap'>
                            <img src={img1} className="imgs"/>
                          </div>  
                            <div className="textWrap">  
                              <p style={{fontSize:'20px'}} className="companyName"><b>{product.productName}</b></p>
                              <p className="itemName1">{product.productDescription}</p>
                              <div className="itemsPrice clearfix"> 
                                <div className="fr">
                                  <strong className="customerPrice"><del style={{color:'red'}}>30,000</del></strong>
                                  <strong className="sellPrice">{product.productPrice}</strong>
                                </div>
                              </div>
                            </div>
                          
                        </a>
                        <div className="itemFotter clearfix">
                          <div className="f1">
                            <span className="basketBtn">
                              <a href="/">
                              <CiShoppingBasket size={20} />
                              </a>
                            </span>
                            <span className="reviewCnt">리뷰1</span>
                          </div>
                          <div className="fr"></div>
                        </div>
                  </li>
                </ul>
              </section>
            </div>
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};
export default Main;