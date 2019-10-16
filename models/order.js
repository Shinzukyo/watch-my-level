'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Order extends Model{}

Order.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {timestamps: false, sequelize});

Order.associate = function(models){
    Order.belongsToMany(models.Configuration, {
        through: 'orderConfigurationLink',
        foreignKey: 'idOrder',
        otherKey: 'idConfiguration'
    });
};

module.exports = Order;