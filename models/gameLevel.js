'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class GameLevel extends Model{}

GameLevel.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {timestamps: false, sequelize});

GameLevel.associate = function(models){
    GameLevel.belongsTo(models.ElementType,{
        onDelete: 'SET NULL',
        foreignKey: 'idElementType'
    });

    GameLevel.hasMany(models.Score, {
        foreignKey: 'idGameLevel'
    });
};

module.exports = GameLevel;