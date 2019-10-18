'use strict';

const models = require('../models');
const ConfigurationElementLink = models.ConfigurationElementLink;
const db = models.database;

const Controller = require('./controller');


class ConfigurationElementLinkController extends Controller{
    constructor() {
        super(ConfigurationElementLink);
    }

    async createOrUpdateConfigUser(idUser, idElement) {
        //let user = models.User.findByPk(idUser);
        //let elem = models.Element.findByPk(idElement);

        let config = models.Configuration.findAll({
            attributes: ['id'],
            where: {
                idUser: `%${idUser}%`
            }
        })

        let configUserElem = ConfigurationElementLink.findAll({
            attributes: ['id'],
            where: {
                idConfiguration: `%${config}%`,
                idElement: `%${idElement}%`,
            }
        })

        if (configUserElem) {
            //TODO DELETE
            super.delete(configUserElem);
            //this.delete(configUserElem);

        }
        //TODO CREATE configUserElem
        super.add({idUser:idUser, idElement:idElement});

    }
}

module.exports = new ConfigurationElementLinkController();