// Main.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link 추가
import '../../css/Shop/ShopMain.css';
import { CiShoppingBasket } from "react-icons/ci"; 

const Main = () => {
  const [products, setProducts] = useState([]);
  const [productIds, setProductIds] = useState([26, 24, 1, 3, 4]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await Promise.all(
          productIds.map(async (productId) => {
            const response = await axios.get(`http://localhost:8080/main/mainpage/${productId}`);
            return response.data;
          })
        );
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchData();
  }, [productIds]);

  return (
    <div className='category-item' style={{ display: 'flex', justifyContent: 'center' }}>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <section key={product.productId}>
              {/* Link 추가 */}
              <Link to={`/detail/${product.productId}`}>
                <h2 style={{ display: 'flex', justifyContent: 'center' }}>New Item</h2><br />
                <ul className='swiper-wrapper'>
                  <li className='swiper-slide swiper-slide-active' style={{
                    width: "272.5px",
                    marginright: "30px",
                  }}>
                    <div className='imgWrap'>
                      <img src={product.productThumbnail} className="imgs" alt={product.productName} />
                    </div>
                    <div className="textWrap">
                      <p style={{ fontSize: '20px' }} className="companyName"><b>{product.productName}</b></p>
                      <p className="itemName1">{product.productDescription}</p>
                      <div className="itemsPrice clearfix">
                        <div className="fr">
                          <strong className="customerPrice"><del style={{ color: 'red' }}>30,000</del></strong>
                          <strong className="sellPrice">{product.productPrice}</strong>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Link>
            </section>
          ))}
        </div>
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Main;
