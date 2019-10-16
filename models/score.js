'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Score extends Model{}

Score.init({
    value: Sequelize.INTEGER,
}, {
    timestamps: false,
    sequelize,
    modelName : 'score'
});

module.exports = Score;