'use strict';

const models = require('../models');
const User = models.User;

const Controller = require('./controller');


class UserController extends Controller{
    constructor() {
        super(User);
    }
}

module.exports = new UserController();