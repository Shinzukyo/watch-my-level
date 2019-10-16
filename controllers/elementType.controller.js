'use strict';

const models = require('../models');
const ElementType = models.ElementType;

const Controller = require('./controller');


class ElementTypeController extends Controller{
    constructor() {
        super(ElementType);
    }
}

module.exports = new ElementTypeController();