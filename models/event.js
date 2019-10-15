'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class Event extends Model{}

Event.init({
    id: {
       type: Sequelize.INTEGER,
       unique: true,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
    },
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    link: Sequelize.STRING
}, {timestamps: false, sequelize});

module.exports = Event;