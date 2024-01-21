import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // useNavigate 추가
import { CiShoppingBasket } from 'react-icons/ci';
import '../css/Shop/ShopMain.css';
import {Link} from 'react-router-dom';

const CategoryList = () => {
  const navigate = useNavigate();  // useNavigate 선언
  const [products, setProducts] = useState([]);
  const [productCategorys, setProductCategorys] = useState(["텐트","베개"]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await Promise.all(
          productCategorys.map(async (productCategory) => {
            const response = await axios.get(`http://localhost:8080/category/main/${productCategory}`);
            return { ...response.data, productCategory };
          })
        );
        setProducts(productData);
      } catch (error) {
        console.error('상품을 불러오는 중 에러 발생', error);
      }
    };

    fetchData();
  }, [productCategorys]);

  const handleProductClick = (productId) => {
    // 상품 클릭 시 상세 페이지로 이동
    navigate(`/detail/item/${productId}`);
  };

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
                onClick={() => handleProductClick(product.productId)}  // 클릭 이벤트 추가
              >
                <h2 style={{ display: 'flex', justifyContent: 'flex-start', marginBottom:'50px'}}>{product.productCategory}</h2>
                <Link to={`/detail/item/${product.productId}`}>
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
                </Link>
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
