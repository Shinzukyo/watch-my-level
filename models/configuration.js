'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Configuration extends Model{}

Configuration.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {timestamps: false, sequelize});

Configuration.associate = function(models){
    Configuration.belongsTo(models.User,{
        onDelete: 'SET NULL',
        foreignKey: 'idUser'
    });

    Configuration.belongsToMany(models.Element, {
        through: 'configurationElementLinks',
        foreignKey: 'idConfiguration',
        otherKey: 'idElement'
    });

    Configuration.belongsToMany(models.Order, {
        through: 'orderConfigurationLink',
        foreignKey: 'idConfiguration',
        otherKey: 'idOrder'
    });

};

module.exports = Configuration;