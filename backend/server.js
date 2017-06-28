var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');

var config      = require('./config/database'); // db config file
var index       = require('./routes/index');

var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	  = require('passport');

var port        = process.env.PORT || 8080;

var app         = express();

// View Engine
app.set('views', path.join(__dirname, '../frontend'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Body Parser MW
// get request parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log to console
app.use(morgan('dev'));

// sse passport package
app.use(passport.initialize());

// connect to database
mongoose.connect(config.database);

// pass passport for configuration
require('./config/passport')(passport);

// api calls
app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/movieRouter'));
app.use('/api', require('./routes/bookingRouter'));
app.use('/api', require('./routes/cartRouter'));

// connect the api routes under /api/*
app.use('/', index);
//app.use('/api', apiRoutes);

// Start the server
app.listen(port);
console.log('Server is listening on port: ' + port);
