import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Shop/ShopCart/ShopCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cart/post');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    fetchCartItems();
  }, []);

  
  const handlePurchase = async () => {
   
    console.log('Purchase items:', cartItems);
  };

  const handleDeleteAll = async () => {
    
    console.log('Delete all items in the cart');
  };


  const handleDeleteSelected = async () => {
  
    console.log('Delete selected items in the cart');
  };

  return (
    <div className="shopping-cart-container">
      <h2>장바구니</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>IMG</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.cartId}>
              <td>
                <img src={cartItem.cartImg} alt={cartItem.cartName} className="product-image" />
              </td>
              <td>{cartItem.cartName}</td>
              <td>{cartItem.cartPrice}</td>
              <td>{cartItem.cartAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-buttons">
        <button onClick={handlePurchase}>구매하기</button>
        <button onClick={handleDeleteAll}>전체 삭제하기</button>
        <button onClick={handleDeleteSelected}>선택 삭제하기</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
