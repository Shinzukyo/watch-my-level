'use strict';

const models = require('../models');
const Element = models.Element;

const Controller = require('./controller');


class ElementController extends Controller{
    constructor() {
        super(Element);
    }
}

module.exports = new ElementController();