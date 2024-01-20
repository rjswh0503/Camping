import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiShoppingBasket } from 'react-icons/ci';
import '../css/Shop/ShopMain.css';

const CategoryList = () => {
  const [products, setProducts] = useState([]);
  const [productCategorys, setProductCategorys] = useState(["텐트","베개","카테고리"]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await Promise.all(
          productCategorys.map(async (productCategory) => {
            const response = await axios.get(`http://localhost:8080/category/main/${productCategory}`);
            return { ...response.data, productCategory }; // 카테고리 정보를 추가
          })
        );
        setProducts(productData); 
      } catch (error) {
        console.error('상품을 불러오는 중 에러 발생', error);
      }
    };

    fetchData();
  }, [productCategorys]);

  return (
    <div className='category-item' style={{ display: 'flex', justifyContent: 'center' }}>
      <section>
      <h2 style={{ display: 'flex', justifyContent: 'flex-start', marginBottom:'50px'}}>카테고리별 상품목록</h2>
        {products.length > 0 ? (
          <ul className='swiper-wrapper1'>
            
            {products.map((product) => (
              
              <li
                key={product.productCategory}
                className='swiper-slide swiper-slide-active'
                style={{
                  width: '272.5px',
                  marginRight: '30px', 
                }}
              >
                <h2 style={{ display: 'flex', justifyContent: 'flex-start', marginBottom:'50px'}}>{product.productCategory}</h2>
                <a href={`/detail/item/${product.productId}`}>
                  <div className='imgWrap'>
                    <img src={product.productThumbnail} className='imgs' alt={product.productName} />
                  </div>
                  <div className='textWrap'>
                    
                    <p style={{fontSize:'20px'}} className='companyName'>{product.productName}</p>
                    <p className='itemName1'>{product.productDescription}</p>
                    <div className='itemsPrice clearfix'>
                      <div className='fr'>
                        <strong className='customerPrice'></strong>
                        <strong className='sellPrice'>{product.productPrice}</strong>
                      </div>
                    </div>
                  </div>
                </a>
                <div className='itemFooter clearfix'>
                  
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
