'use strict';
var sequelize = require('sequelize');
const models = require('../models');
const Score = models.Score;

const Controller = require('./controller');


class ScoreController extends Controller {
    constructor() {
        super(Score);
    }

    async getRankingWithUser(id) {
        return Score.findAll({
            attributes: ['idUser', [sequelize.fn('sum', sequelize.col('value')), 'sum']],
            order: sequelize.literal('sum DESC'),
            group: ['Score.idUser']
        })
    }
}

module.exports = new ScoreController();