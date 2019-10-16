'use strict';

const models = require('../models');
const OrderConfigurationLink = models.OrderConfigurationLink;

const Controller = require('./controller');


class OrderConfigurationLinkController extends Controller{
    constructor() {
        super(OrderConfigurationLink);
    }
}

module.exports = new OrderConfigurationLinkController();