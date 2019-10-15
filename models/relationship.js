const models = require('./');

const Configuration = models.Configuration;
const Element = models.Element;

Configuration.associate(models);
Element.associate(models);
