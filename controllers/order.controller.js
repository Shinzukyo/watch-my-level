'use strict';

const models = require('../models');
const Order = models.Order;

const Controller = require('./controller');


class OrderController extends Controller{
    constructor() {
        super(Order);
    }
}

module.exports = new OrderController();