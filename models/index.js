'use script';
db = require('./database');

module.exports = {
    database: db,
    Event: require('./event'),
};

//require('./relationship');

//db.sequelize.sync({force:true});
db.sequelize.sync();
