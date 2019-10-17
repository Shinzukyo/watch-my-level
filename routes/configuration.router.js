'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const ConfigurationController = require('../controllers').ConfigurationController;
const path = require('path');

const router = express.Router();
router.use(bodyParser.json());

router.get('/test', async (req, res) => {
    console.log(path.join(__dirname, '../assets/img/', 'bracelet_1.png'));
    res.sendFile(path.join(__dirname, '../assets/img/', 'bracelet_1.png'));
});

router.post('/', async (req, res) => {
    try {
        const p = await ConfigurationController.add(req.body);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.put('/:id', async (req, res) => {
    const p = await ConfigurationController.update(req.params.id, req.body);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/:id', async (req, res) => {
    const p = await ConfigurationController.getById(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await ConfigurationController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await ConfigurationController.delete(req.params.id);
    if(p !== 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;