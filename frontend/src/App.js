// src/App.js
import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    // Fetch existing products from the backend on initial load
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Function to add a new product
    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    };

    // Function to delete a product by ID
    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/product/${productId}`);
            setProducts(products.filter((product) => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="App">
            <h1>Product Management</h1>
            <ProductForm onAddProduct={handleAddProduct} />
            <ProductList products={products} onDelete={handleDeleteProduct} />
        </div>
    );
}

export default App;
