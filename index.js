'use strict';
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const RouterBuilder = require('./routes');

const app = express();
app.use(morgan('dev'));

RouterBuilder.build(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`LINK START !!! Welcome on server ${port}...`));
