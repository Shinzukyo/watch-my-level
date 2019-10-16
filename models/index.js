'use script';
db = require('./database');

module.exports = {
    database: db,
    Event: require('./event'),
    User: require('./user'),
    Configuration: require('./configuration'),
    ElementType: require('./elementType'),
    Element: require('./element'),
    ConfigurationElementLink: require('./configurationElementLink'),
    Order: require('./order'),
    OrderConfigurationLink: require('./orderConfigurationLink'),
    GameLevel: require('./gameLevel'),
    Score: require('./score'),
    Media: require('./media'),
};

require('./relationship');

if (process.argv[2] === 'deleteDb') {
    db.sequelize.sync({force:true});
} else {
    db.sequelize.sync();
}