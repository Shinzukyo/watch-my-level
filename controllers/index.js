'use strict';

module.exports = {
    EventController: require('./event.controller'),
    UserController: require('./user.controller'),
    ConfigurationController: require('./configuration.controller'),
    ElementTypeController: require('./elementType.controller'),
    ElementController: require('./element.controller'),
    ConfigurationElementLinkController: require('./configurationElementLink.controller'),
    OrderController: require('./order.controller'),
    OrderConfigurationLinkController: require('./orderConfigurationLink.controller'),
    GameLevelController: require('./gameLevel.controller'),
    ScoreController: require('./score.controller'),
    MediaController: require('./media.controller'),
    ProductController:require('./product.controller'),
};

const DatabaseController = require('./database.controller');

if (process.argv[2] === 'seed') {
    DatabaseController.seed();
}