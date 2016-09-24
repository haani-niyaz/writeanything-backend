// bootstrap application

require('dotenv').config();

var express 		= require('express');
var app 			= express();
var expressLayouts 	= require('express-ejs-layouts');
var bodyParser 	 	= require('body-parser');


// load all routes
var router = require('./routes');


app.port = process.env.PORT || 8000;

// load utilities
require('./utils/database');
require('./utils/firebase');

// template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


// set views directory
app.set('views', __dirname + '/../public/views');

/**
 * By default Express will not serve static files. It needs to be told explicitly 
 * where the static files are so that it can render them
 * 
 */

app.use(express.static(__dirname + '/../public'));


// middleware for all routes
app.use('/',router);


module.exports = app;