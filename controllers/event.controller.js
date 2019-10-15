'use strict';

const models = require('../models');
const Event = models.Event;

const Controller = require('./controller');


class EventController extends Controller{
    constructor() {
        super(Event);
    }
}

module.exports = new EventController();