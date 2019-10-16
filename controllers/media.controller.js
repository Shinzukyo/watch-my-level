'use strict';

const models = require('../models');
const Media = models.Media;

const Controller = require('./controller');


class MediaController extends Controller{
    constructor() {
        super(Media);
    }
}

module.exports = new MediaController();