

'use strict';

const models = require('../models');
const GameLevel = models.GameLevel;

const Controller = require('./controller');


class GameLevelController extends Controller{
    constructor() {
        super(GameLevel);
    }

    shuffleArray(array) {
        const clone = array.slice(0);
        array = array.concat(clone);
        array = this.shuffle(array);
        return array;
    }

     shuffle(array) {
        let counter = array.length;

        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }
}

module.exports = new GameLevelController();