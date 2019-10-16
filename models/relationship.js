const models = require('./');

const Configuration = models.Configuration;
const Element = models.Element;
const GameLevel = models.GameLevel;
const Order = models.Order;
const User = models.User;

Configuration.associate(models);
Element.associate(models);
GameLevel.associate(models);
Order.associate(models);
User.associate(models);
