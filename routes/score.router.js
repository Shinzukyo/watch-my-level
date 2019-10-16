'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const ScoreController = require('../controllers').ScoreController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await ScoreController.add(req.body);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.put('/:id', async (req, res) => {
    const p = await ScoreController.update(req.params.id, req.body);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/ranking', async (req, res) => {
    const p = await ScoreController.getRankingWithUser(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/:id', async (req, res) => {
    const p = await ScoreController.getById(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await ScoreController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await ScoreController.delete(req.params.id);
    if(p !== 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;