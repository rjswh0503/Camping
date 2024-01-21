// Tent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Link 추가
import '../../css/Shop/ShopMain.css';
import { CiShoppingBasket } from "react-icons/ci"; 

const Kitchen = () => {
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState(["키친"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await Promise.all(
            productCategory.map(async (productCategory) => {
            const response = await axios.get(`http://localhost:8080/category/main/${productCategory}`);
            return { ...response.data, productCategory };
          })
        );
        setProducts(productData);
      } catch (error) {
        console.error("상품을 불러오는 중 에러 발생", error);
      }
    };

    fetchData();
  }, [productCategory]);

  return (
    <div className='category-item' style={{ display: 'flex', justifyContent: 'center' }}>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <section key={product.productCategory}>
              <h2 style={{ display: 'flex', justifyContent: 'center' }}>{product.productCategory}</h2><br />
              <ul className='swiper-wrapper'>
                <li className='swiper-slide swiper-slide-active' style={{
                  width: "272.5px",
                  marginright: "30px",
                }}>
                  
                  <Link to={`/detail/item/${product.productId}`}>
                    <div className='imgWrap'>
                      <img src={product.productThumbnail} className="imgs" alt={product.productName} />
                    </div>
                    <div className="textWrap">
                      <p style={{ fontSize: '20px' }} className="companyName"><b>{product.productName}</b></p>
                      <p className="itemName1">{product.productDescription}</p>
                      <div className="itemsPrice clearfix">
                        <div className="fr">
                          <strong className="sellPrice">{product.productPrice}</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="itemFotter clearfix">
                    <div className="fr"></div>
                  </div>
                </li>
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Kitchen;
