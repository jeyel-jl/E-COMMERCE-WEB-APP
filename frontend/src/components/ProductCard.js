import React from 'react';

function ProductCard({ product, onDelete }) {
    return (
        <div className="product-card">
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p className="quantity">Quantity: {product.quantity}</p>
            <button onClick={() => onDelete(product.id)} className="delete-button">Delete</button>
        </div>
    );
}
export default ProductCard;