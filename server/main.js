'use strict';

var chalk = require('chalk');
const express = require('express');
const {resolve} = require('path');

// Create a node server instance! 
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
    app.use(express.static(resolve(__dirname, '..', 'public')))
};

var startServer = function () {
    var PORT = process.env.PORT || 1337;
    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

createApplication();
startServer();

