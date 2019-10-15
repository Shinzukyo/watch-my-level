'use strict';

class RouterBuilder {
    build(app) {
        app.use('/event', require('./event.router'))
    }
}

module.exports = new RouterBuilder();
