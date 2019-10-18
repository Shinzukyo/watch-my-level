'use strict';

const models = require('../models');
const Media = models.Media;

const Sequelize = models.database.Sequelize;

const Op = Sequelize.Op;

const Controller = require('./controller');


class MediaController extends Controller{
    constructor() {
        super(Media);
    }

    async getShuffledMediaByGameLevelId(id) {
        let array = await this.getByGameLevelId(id);
        array = this.shuffleArray(array);
        return array;
    }

    async getByGameLevelId(id) {
        return Media.findAll({
            where: {
                idGameLevel: {
                    [Op.lte]: id
                }
            }
        });
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

module.exports = new MediaController();