'use strict';

const models = require('../models');
const Product = models.Product;

const Controller = require('./controller');


class ProductController extends Controller{
    constructor() {
        super(Product);
    }
}

module.exports = new ProductController();