const express = require('express');
const sequelize = require('./config/database');
const Product = require('./models/Product');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/product', productRoutes);
app.get('/', (req, res) => {
  res.send('E-commerce API Running');
});

// Test the database connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch((err) => console.error('Error connecting to the database:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

sequelize.sync({ force: false }) // `force: true` will drop tables if they exist, use with caution
    .then(() => console.log('Database & tables created!'))
    .catch((err) => console.error('Error creating database & tables:', err));
    

    