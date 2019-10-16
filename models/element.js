'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Element extends Model{}

Element.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    link: Sequelize.STRING,
}, {timestamps: false, sequelize});

Element.associate = function(models){
    Element.belongsTo(models.ElementType,{
        onDelete: 'SET NULL',
        foreignKey: 'idElementType'
    });

    /*Element.hasMany(models.ConfigurationElementLink, {
        foreignKey: 'idElement'
    });*/

    Element.belongsToMany(models.Configuration, {
        through: 'configurationElementLinks',
        foreignKey: 'idElement',
        otherKey: 'idConfiguration'
    });
};

module.exports = Element;