'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Media extends Model{}

Media.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    url: Sequelize.STRING
}, {timestamps: false, sequelize});


Media.associate = function(models){
    Media.belongsTo(models.GameLevel,{
        onDelete: 'SET NULL',
        foreignKey: 'idGameLevel'
    });
};

module.exports = Media;