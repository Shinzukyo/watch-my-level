'use strict';

const models = require('../models');
const GameLevel = models.GameLevel;

const Controller = require('./controller');


class GameLevelController extends Controller{
    constructor() {
        super(GameLevel);
    }
}

module.exports = new GameLevelController();