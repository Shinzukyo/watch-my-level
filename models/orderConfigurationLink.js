'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class OrderConfigurationLink extends Model{}

OrderConfigurationLink.init({
    price: Sequelize.FLOAT
}, {
    timestamps: false,
    sequelize,
    modelName: 'orderConfigurationLink'
});

module.exports = OrderConfigurationLink;