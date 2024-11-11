// src/App.js
import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './styles/styles.css';

function App() {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="container">
            <h1>Product Listing</h1>
            <ProductForm onAddProduct={addProduct} />
            <ProductList products={products} />
        </div>
    );
}

export default App;
