// src/App.js
import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import AdminPage from './components/AdminPage';
import CustomerPage from './components/CustomerPage';



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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} /> {/* Default Sign-In page */}
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/customer" element={<CustomerPage />} />
            </Routes>
        </Router>
    );
}

function App() {
    // Mock states for authentication and roles
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    // Function to handle login
    const handleLogin = (role) => {
        setIsAuthenticated(true);
        setUserRole(role);
    };

    return (
        <Router>
            <Routes>
                {/* Default route for Sign-In */}
                <Route
                    path="/"
                    element={<SignIn onLogin={handleLogin} />}
                />

                {/* Protected route for Admin */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated && userRole === 'admin'}
                        >
                            <AdminPage />
                        </ProtectedRoute>
                    }
                />

                {/* Protected route for Customer */}
                <Route
                    path="/customer"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated && userRole === 'customer'}
                        >
                            <CustomerPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
