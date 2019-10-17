'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const GameLevelController = require('../controllers').GameLevelController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/shuffle', async (req, res) => {
    try {
        const p = GameLevelController.shuffleArray(req.body);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.post('/', async (req, res) => {
    try {
        const p = await GameLevelController.add(req.body);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.put('/:id', async (req, res) => {
    const p = await GameLevelController.update(req.params.id, req.body);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/:id', async (req, res) => {
    const p = await GameLevelController.getById(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await GameLevelController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await GameLevelController.delete(req.params.id);
    if(p !== 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;