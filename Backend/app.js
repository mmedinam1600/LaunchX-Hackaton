/* ENVIRONMENT VARIABLES AND CONFIG */
const dotenv = require('dotenv');
dotenv.config();

// EXPRESS JS
const express = require('express');
const app = express();


// HELMET
const helmet = require('helmet');
const { helmetConfig } = require('./helpers/helmet-config');
app.use(helmet());
app.use(helmet.contentSecurityPolicy(helmetConfig));

// CORS
const cors = require('cors');
app.use(cors());

//LOGGER
const logger = require('morgan');

// GLOBAL MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const { router } = require('./routes/router');
app.use('/', router);

app.listen(8080, async () => {
  try {
    console.log(`Server up running in http://localhost:8080`);
  } catch (e) {
    console.log(`Failed to start server: \n${e}`);
    process.exit(1);
  }
});
