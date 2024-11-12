// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onDelete }) {
    return (
        <div className="product-cards">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default ProductList;
