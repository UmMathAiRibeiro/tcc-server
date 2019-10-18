var load = require('consign');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function () {
    var app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    load({
        cwd: 'app',
        locale: 'pt-br',
        verbose: false
    }).include('infra').then('routes').into(app);
    return app;
};