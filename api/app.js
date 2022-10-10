var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('./plugins/Axios');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


//import routes
var routes = require('./routes');
var app = express();


// Swagger
/**
 * const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'KeyCloak API',
      description: 'KeyCloak information',
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["routes.js"]
};
 * const swaggerDocs = swaggerJsDoc(swaggerOptions);
 */


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerOptions: { persistAuthorization: true }
}));


// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//router
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
