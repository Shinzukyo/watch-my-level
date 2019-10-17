'use strict';

const models = require('../models');
const ConfigurationElementLink = models.ConfigurationElementLink;

const Controller = require('./controller');


class ConfigurationElementLinkController extends Controller{
    constructor() {
        super(ConfigurationElementLink);
    }
    async createOrUpdateConfigUser(idUser, idElement) {

    }
}

module.exports = new ConfigurationElementLinkController();