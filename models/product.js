'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Product extends Model{}

Product.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    label: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
}, {timestamps: false, sequelize});

module.exports =  Product;