// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ onAddProduct }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { title, price, description, quantity };

        try {
            // Send the new product to the backend
            const response = await axios.post('http://localhost:5000/api/product', newProduct);
            onAddProduct(response.data); // Add the new product to the product list
            setTitle('');
            setPrice('');
            setDescription('');
            setQuantity('');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <label>Product Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

            <label>Quantity:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

            <button type="submit">Add Product</button>
        </form>
    );
}

export default ProductForm;
