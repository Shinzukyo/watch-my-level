'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class User extends Model{}

User.init({
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
}, {timestamps: false, sequelize});

User.associate = function(models){
    User.hasMany(models.Score, {
        foreignKey: 'idUser'
    });

    User.belongsToMany(models.GameLevel, {
        through: 'score',
        foreignKey: 'idUser',
        otherKey: 'idGameLevel'
    });
};

module.exports = User;