'use strict';

const models = require('../models');
const Score = models.Score;

const Controller = require('./controller');


class ScoreController extends Controller {
    constructor() {
        super(Score);
    }

    async getRankingWithUser(id) {
        Score.findAll({
            order: sequelize.literal('max(score) DESC')
        })
    }
}

module.exports = new ScoreController();