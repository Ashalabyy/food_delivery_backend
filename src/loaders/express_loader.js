const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const helmet = require('helmet');
const { accessLogSystem } = require('../utils/access_logs');
class ExpressLoader {
    static init () {
        const app = express();
        // Middleware that transforms the raw string of req.body into json
        app.use(express.json());
        //Middleware that use More Headers for protecting.
        app.use(helmet());
        // Middleware that create a log file for the incoming Request.
        app.use(morgan('combined',{stream : accessLogSystem}));
        // parses incoming requests with JSON payloads
        app.use(cors());
        app.options("*", cors());

        return app;
    }
}

module.exports = { ExpressLoader };