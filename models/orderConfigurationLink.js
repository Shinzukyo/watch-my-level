'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class OrderConfigurationLink extends Model{}

OrderConfigurationLink.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    price: Sequelize.FLOAT
}, {timestamps: false, sequelize});

module.exports = OrderConfigurationLink;