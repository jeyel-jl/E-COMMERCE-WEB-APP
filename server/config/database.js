const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ecommercewebapp', 'root', 'admin123', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports = sequelize;
