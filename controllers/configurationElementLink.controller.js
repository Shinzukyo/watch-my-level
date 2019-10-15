'use strict';

const models = require('../models');
const ConfigurationElementLink = models.ConfigurationElementLink;

const Controller = require('./controller');


class ConfigurationElementLinkController extends Controller{
    constructor() {
        super(ConfigurationElementLink);
    }
}

module.exports = new ConfigurationElementLinkController();