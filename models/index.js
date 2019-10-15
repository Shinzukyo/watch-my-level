'use script';
db = require('./database');

module.exports = {
    database: db,
    Event: require('./event'),
    User: require('./user'),
};

//require('./relationship');

db.sequelize.sync({force:true});
//db.sequelize.sync();
