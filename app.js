// REQUIRE MODULES
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');



// REQUIRE ROUTE FILES
var index = require('./routes/index');
var book = require('./routes/book');
var author = require('./routes/author');
var author_book = require('./routes/author_book');

var app = express();


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// USE ROUTES
app.use('/', index);
app.use('/book', book);
app.use('/author', author);
app.use('/author_book', author_book);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500).json({
        message: err.message,
        error: err
    });
});

app.listen(process.env.PORT);

module.exports = app;
