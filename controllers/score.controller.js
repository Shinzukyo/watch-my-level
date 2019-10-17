'use strict';

const models = require('../models');
const Score = models.Score;
const db = models.database;

const Controller = require('./controller');


class ScoreController extends Controller {
    constructor() {
        super(Score);
    }

    async getRankingWithUser(id) {
        return Score.findAll({
            attributes: ['idUser', [db.sequelize.fn('sum', db.sequelize.col('value')), 'sum']],
            group: ['idUser'],
            order: db.sequelize.literal('sum DESC')
        })
    }
}

module.exports = new ScoreController();