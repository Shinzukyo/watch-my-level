'use strict';

const Model = require('sequelize').Model;

const sequelize = require('./database').sequelize;
const Sequelize = require('./database').Sequelize;

class ConfigurationElementLink extends Model{}

ConfigurationElementLink.init({ }, {
    timestamps: false,
    sequelize,
    modelName: 'configurationElementLinks'
});

module.exports = ConfigurationElementLink;