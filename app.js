require('dotenv').config();
var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');

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
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    connectTimeout: 60000
  }
});

const session = require('express-session');

// require session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);


app.use(session({
  secret: 'This@is@my@secret@code@that@is!hard@code@thatis',
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 30 * 60 * 1000, // check every 30 minutes
    expiration: 1 * 60 * 60 * 1000, // expire sessions after 1 hour
  }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1 * 60 * 60 * 1000, //session data expires after 1 hrs
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

// // ##################### Begging Multer #####################################

// const storage = multer.diskStorage({
//   // set destination folder where uploaded files will be stored
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     // Set the file naming convention
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.'.pop()))
//   }
// });

// const upload = multer({
//   storage: storage
// })

// // ##################### Ending  Multer #####################################




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/mails', mailRouter);
// app.use('/dashboard', checkSession, dashboardRouter);
app.use('/login', authenticationRouter);
app.use('/dashboard', checkSession, dashboardRouter);
app.use('/signup', signUpRouter);
app.use('/users', usersRouter);
app.use('/mails', mailRouter);


app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
})
// about
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Team'
  });
});
app.get('/gallery', (req, res) => {
  res.render('gallery', {
    title: 'Gallery'
  });
})
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