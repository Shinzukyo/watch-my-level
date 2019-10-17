

'use strict';

const models = require('../models');
const User = models.User;

const Controller = require('./controller');
const ConfigurationController = require('./').ConfigurationController;


class UserController extends Controller{
    constructor() {
        super(User);
    }

    async login(body) {
        return await User.findOne({
            where: {
                username: body.username
            }
        }).then(user =>{
            if (!user) {
                return {success: false, message: "User not found."};
            } else {
                if (user.password === body.password ) {
                    return user;
                } else {
                    return {success: false, message: "Wrong password"};
                }
            }
        });
    }
}

module.exports = new UserController();