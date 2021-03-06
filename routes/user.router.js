'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;
const ConfigurationController = require('../controllers').ConfigurationController;

const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const p = await UserController.add(req.body);
        const userIds = [];
        for ( const user of p ){
            userIds.push({idUser:user.dataValues.id});
        }
        await ConfigurationController.add(userIds);
        res.json(p);
    } catch(err) {
        res.status(409).end();
    }
});

router.put('/:id', async (req, res) => {
    const p = await UserController.update(req.params.id, req.body);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.post('/login', async (req, res) => {
    const p = await UserController.login(req.body);
    if(p.success === false) {
        res.status(401).send(p).end();
    } else {
        res.json(p);
    }

});

router.get('/criteria', async (req, res) => {
    console.log("_________________________________________________________req begin");
    console.log(req);
    console.log("_________________________________________________________req end");

    const p = await UserController.getByParams(req.body);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();
});

router.get('/:id', async (req, res) => {
    const p = await UserController.getById(req.params.id);
    if(p) {
        return res.json(p);
    }
    res.status(404).end();

});

router.get('/', async (req, res) => {
    const p = await UserController.getAll();
    if(p) {
        return res.json(p).status(200);
    }
    res.status(404).end();
});

router.delete('/:id', async (req, res) => {
    const p = await UserController.delete(req.params.id);
    if(p !== 0) {
        res.status(200).end();
    }
    res.status(404).end();
});

module.exports = router;