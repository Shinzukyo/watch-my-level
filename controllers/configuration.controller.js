'use strict';

const models = require('../models');
const Configuration = models.Configuration;

const Controller = require('./controller');


class ConfigurationController extends Controller{
    constructor() {
        super(Configuration);
    }
}

module.exports = new ConfigurationController();