require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mailRouter = require('./routes/mail.route');
const dashboardRouter = require('./routes/dashboard.route')
const authenticationRouter = require('./routes/loginLogout.route');
const signUpRouter = require('./routes/signUp.route');

// create an express instance
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ################ Beggining of sesion management #########################
// import sequelize
const {
  Sequelize
} = require('sequelize');
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});
const session = require('express-session');

// require session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(session({
  secret: 'This@is@my@secret@code@that@is!hard@code@thatis',
  store: new SequelizeStore({
    db: sequelize
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 60 * 1000, //clears session data after 30 min of inactivity
    httpOnly: true,
  }
}))

function checkSession(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login?error=no_session');
  }
  next();
}
// ##################### End of session management ##########################

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mails', mailRouter);
app.use('/dashboard', checkSession, dashboardRouter);
app.use('/login', authenticationRouter);
app.use('/signup', signUpRouter);

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
})
// about
app.get('/about', (req, res) => {
  res.render('about',{
    title: 'Team'
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
// module.exports = app;