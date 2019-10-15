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
};

require('./relationship');

db.sequelize.sync({force:true});
//db.sequelize.sync();
