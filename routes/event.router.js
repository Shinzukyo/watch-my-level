'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const EventController = require('../controllers').EventController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await EventController.add(req.body);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.put('/:id', async (req, res) => {
    const p = await EventController.update(req.params.id, req.body);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/:id', async (req, res) => {
    const p = await EventController.getById(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await EventController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await EventController.delete(req.params.id);
    if(p !== 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;