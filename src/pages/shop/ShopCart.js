// ShoppingCart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Shop/ShopCart/ShopCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cart/post'); // Replace with your actual API endpoint
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    // Fetch cart items when the component mounts
    fetchCartItems();
  }, []);

  return (
    <div className="shopping-cart-container">
      <h2>Your Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>CATEGORY</th>
            <th>IMG</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.CART_CATEGORY}</td>
              <td>
                <img src={item.CART_IMG} alt={item.CART_NAME} className="product-image" />
              </td>
              <td>{item.CART_NAME}</td>
              <td>{item.CART_PRICE}</td>
              <td>{item.CART_AMOUNT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
