import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiShoppingBasket } from 'react-icons/ci';
import '../css/Shop/ShopMain.css';

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [productCategorys, setProductCategorys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await Promise.all(
          productCategorys.map(async (productCategory) => {
            const response = await axios.get(`http://localhost:8080/main/category/${productCategory}`);
            return response.data;
          })
        );
        setProducts(productData); 
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchData();
  }, [productCategorys]);

  return (
    <div className='category-item' style={{ display: 'flex', justifyContent: 'center' }}>
      <section>
      <h2 style={{ display: 'flex', justifyContent: 'center' }}>카테고리별 아이템</h2>
        {products.length > 0 ? (
          <ul className='swiper-wrapper'>
            {products.map((product) => (
              <li
                key={product.productCategory}
                className='swiper-slide swiper-slide-active'
                style={{
                  width: '272.5px',
                  marginRight: '30px', 
                }}
              >
                <a href={`/detail/${product.productId}`}>
                  <div className='imgWrap'>
                    <img src={product.productThumbnail} className='imgs' alt={product.productName} />
                  </div>
                  <div className='textWrap'>
                    <h2></h2>
                    <p className='companyName'>{product.productCategory}</p>
                    <p className='itemName1'>{product.productName}</p>
                    <div className='itemsPrice clearfix'>
                      <div className='fr'>
                        <strong className='customerPrice'></strong>
                        <strong className='sellPrice'>{product.productPrice}</strong>
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
            ))}
          </ul>
        ) : (
          <p>상품을 찾을 수 없습니다.</p>
        )}
      </section>
    </div>
  );
};

export default CategoryList;
