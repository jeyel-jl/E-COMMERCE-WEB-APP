// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p className="quantity">Quantity: {product.quantity}</p>
        </div>
    );
}

export default ProductCard;