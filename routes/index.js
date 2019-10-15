'use strict';

class RouterBuilder {
    build(app) {
        app.use('/event', require('./event.router'));
        app.use('/user', require('./user.router'));
    }
}

module.exports = new RouterBuilder();
