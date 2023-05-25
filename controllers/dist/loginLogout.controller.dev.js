"use strict";

var _require = require('../models'),
    User = _require.User,
    Role = _require.Role,
    UserStatus = _require.UserStatus;

var bcrypt = require('bcrypt');

module.exports = {
  login: function login(req, res) {
    var _req$body, email, password, user, isMatch;

    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              include: [{
                model: Role,
                required: true
              }, {
                model: UserStatus,
                required: true
              }],
              where: {
                email: email
              }
            }));

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.redirect('/login?error=no_user'));

          case 6:
            if (!(user.UserStatus.name != 'Active')) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.redirect('/login?error=inactive'));

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

          case 10:
            isMatch = _context.sent;

            if (isMatch) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.redirect('/login?error=invalid_credentials'));

          case 13:
            console.log('Setting user session');
            req.session.user = user;
            res.redirect('/dashboard');

          case 16:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  logout: function logout(req, res) {
    return regeneratorRuntime.async(function logout$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req.session.destroy(function (err) {
              if (err) {
                console.error('Error destroying session:', err);
              } else {
                console.log('Session data deleted');
                res.redirect('/login'); // Redirect to login page or any other appropriate route
              }
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};