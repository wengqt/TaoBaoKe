/**
 * Created by yujingyang on 2017/3/15.
 */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevConfig = require('../webpack.config');

var CSS_DIR = path.join(__dirname,"..","css");
var IMG_DIR = path.join(__dirname,"..","images");
module.exports = function () {
    var app = new express();
    var compiler = webpack(webpackDevConfig);
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackDevConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
    app.use(express.static('./statics'));

    app.use('/images', express.static(IMG_DIR));
    require('./api')(app);

    app.get("/*", function (req, res) {
        res.sendFile(__dirname + '/index.html');
    });




    var APP_PORT = 3001;
    app.listen(APP_PORT, function (error) {
        if (error) {
            console.error(error);
        } else {
            console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", APP_PORT, APP_PORT);
        }
    });
};
