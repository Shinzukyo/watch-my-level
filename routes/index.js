'use strict';

class RouterBuilder {
    build(app) {
        app.use('/event', require('./event.router'));
        app.use('/user', require('./user.router'));
        app.use('/configuration', require('./configuration.router'));
        app.use('/elementType', require('./elementType.router'));
        app.use('/element', require('./element.router'));
        app.use('/order', require('./order.router'));
        app.use('/orderConfigurationLink', require('./orderConfigurationLink.router'));
        app.use('/gameLevel', require('./gameLevel.router'));
    }
}

module.exports = new RouterBuilder();
