const models = require('./');

const Configuration = models.Configuration;
const Element = models.Element;
const GameLevel = models.Element;
const Order = models.Element;

Configuration.associate(models);
Element.associate(models);
GameLevel.associate(models);
Order.associate(models);
