'use strict';

const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host : process.env.DB_HOST,
        port : process.env.DB_PORT
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
