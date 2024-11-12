const Product = require('../models/Product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Get the ID from the URL
        const product = await Product.findByPk(productId); // Find the product by ID

        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // If product not found, return 404
        }

        await product.destroy(); // Delete the product
        res.status(200).json({ message: 'Product deleted successfully' }); // Send success response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

