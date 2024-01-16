import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../css/NewItem.css';




const Main = () => {
  const [product, setProducts] = useState([]);
  const [productId, setProductId]= useState(10);
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
    <div>
      <h2>New Item</h2><br/>  
      {product ? (
        <div key={product}>
        <ul className='swiper-wrapper'>
          <li className='swiper-slide swiper-slide-active'style={{
                              width: "272.5px", 
                              marginright: "30px",
                              }}>
                <div className='imgWrap'>
                  <a href="">
                  1111
                  </a>
                  <p className="cmpanyName">카테고리 - {product.productCategory}</p>
                  <p className="itemName1"> 상품명 : {product.productName}</p>
                  <p className="itemName1">상품설명 : {product.productDescription}</p>
                  <p className="itemsPrice clearfix">가격 {product.productPrice}원</p>
                </div>
              
          </li>
        </ul>
        </div>
        
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};
export default Main;