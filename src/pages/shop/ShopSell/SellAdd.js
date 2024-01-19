

import React, { useState } from 'react';
import axios from 'axios';


const SellAdd = () => {
    const [formData, setFormData] = useState({
        category: '',
        productName: '',
        price: '',
        productDescription: '',
        stock: '',
        image1: '',
        image2: '',
        image3: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., send data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div className="sell-add-form">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    카테고리:
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </label>

                <label>
                    상품명:
                    <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
                </label>

                <label>
                    가격:
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </label>

                <label>
                    상품내용:
                    <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} />
                </label>

                <label>
                    상품재고:
                    <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
                </label>

                <label>
                    상품이미지1:
                    <input type="file" name="image1" value={formData.image1} onChange={handleChange} />
                </label>

                <label>
                    상품이미지2:
                    <input type="file" name="image2" value={formData.image2} onChange={handleChange} />
                </label>

                <label>
                    상품이미지3:
                    <input type="file" name="image3" value={formData.image3} onChange={handleChange} />
                </label>

                <button type="submit">등록하기</button>
            </form>
        </div>
    );
};

export default SellAdd;
