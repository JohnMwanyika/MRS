"use strict";

var _require = require('../models'),
    Request = _require.Request,
    Mail = _require.Mail,
    RequestType = _require.RequestType,
    RequestStatus = _require.RequestStatus,
    User = _require.User,
    Role = _require.Role,
    UserStatus = _require.UserStatus,
    Department = _require.Department;

var bcrypt = require('bcrypt');

var csv = require('csv-parser');

var fs = require('fs');

module.exports = {
  getDashboard: function getDashboard(req, res) {
    return regeneratorRuntime.async(function getDashboard$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Request.findAll({
              include: [{
                model: Mail,
                required: false
              }, {
                model: RequestType,
                required: true
              }, {
                model: RequestStatus,
                required: true
              }, {
                model: User,
                required: false
              }],
              order: [['createdAt', 'DESC']],
              where: {
                requestStatus: 2
              }
            }).then(function _callee(pendingRequests) {
              var allRequests, completedRequests, declinedRequests;
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return regeneratorRuntime.awrap(Request.count());

                    case 2:
                      allRequests = _context.sent;
                      _context.next = 5;
                      return regeneratorRuntime.awrap(Request.count({
                        where: {
                          requestStatus: 1
                        }
                      }));

                    case 5:
                      completedRequests = _context.sent;
                      _context.next = 8;
                      return regeneratorRuntime.awrap(Request.count({
                        where: {
                          requestStatus: 3
                        }
                      }));

                    case 8:
                      declinedRequests = _context.sent;
                      return _context.abrupt("return", [pendingRequests, allRequests, completedRequests, declinedRequests]);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }).then(function (data) {
              console.log(data);
              res.render('dashboard', {
                title: 'Dashboard',
                user: req.session.user,
                requests: data[0],
                moment: require('moment'),
                allRequests: data[1],
                completedRequests: data[2],
                declinedRequests: data[3]
              });
            })["catch"](function (error) {
              res.render('error', {
                error: error,
                message: error.message
              });
            }));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  // list all mails that have been created,,concidering the role of the user in the dashboard
  newlyCreatedMails: function newlyCreatedMails(req, res) {
    return regeneratorRuntime.async(function newlyCreatedMails$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(req.session.user.Role.name == 'Super Admin')) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return regeneratorRuntime.awrap(Request.findAll({
              include: [{
                model: Mail,
                required: false
              }, {
                model: RequestType,
                required: true
              }, {
                model: RequestStatus,
                required: true
              }, {
                model: User,
                required: true
              }],
              order: [['createdAt', 'DESC']],
              where: {
                requestStatus: 1,
                //completed
                requestType: 2 //create New Mail
                // userId:req.session.user.id //get all mails that a specific admin has attended to

              }
            }).then(function (newMails) {
              console.log(JSON.stringify(newMails)); // res.json({newMails})

              res.render('newMails', {
                title: 'New mails',
                status: 'success',
                user: req.session.user,
                data: newMails,
                moment: require('moment'),
                axios: require('axios')
              });
            })["catch"](function (error) {
              res.render('error', {
                error: error
              });
            }));

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.next = 8;
            return regeneratorRuntime.awrap(Request.findAll({
              include: [{
                model: Mail,
                required: false
              }, {
                model: RequestType,
                required: true
              }, {
                model: RequestStatus,
                required: true
              }, {
                model: User,
                required: true
              }],
              order: [['createdAt', 'DESC']],
              where: {
                requestStatus: 1,
                //completed
                requestType: 2,
                //create New Mail
                userId: req.session.user.id //get all mails that a specific admin has attended to

              }
            }).then(function (newMails) {
              console.log(JSON.stringify(newMails)); // res.json({newMails})

              res.render('newMails', {
                title: 'New mails',
                status: 'success',
                user: req.session.user,
                data: newMails,
                moment: require('moment'),
                axios: require('axios')
              });
            })["catch"](function (error) {
              res.render('error', {
                error: error
              });
            }));

          case 8:
            return _context3.abrupt("return", _context3.sent);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  // get all the users of the system
  getUsers: function getUsers(req, res) {
    var errorMessage, successMessage, roles;
    return regeneratorRuntime.async(function getUsers$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // defining request queries
            errorMessage = req.query.error === 'user_exists' ? 'This user already exists in the database' : "";
            successMessage = req.query.success === 'user_created' ? 'User has been created successfully' : "";
            _context4.next = 4;
            return regeneratorRuntime.awrap(Role.findAll());

          case 4:
            roles = _context4.sent;
            _context4.next = 7;
            return regeneratorRuntime.awrap(User.findAll({
              include: [{
                model: Role,
                required: true
              }, {
                model: UserStatus,
                required: true
              }]
            }).then(function (result) {
              // res.set('Content-Security-Policy', "script-src 'unsafe-inline' 'unsafe-eval' *");
              return res.render('users', {
                title: 'User management',
                user: req.session.user,
                status: 'success',
                data: result,
                roles: roles,
                errorMessage: errorMessage,
                successMessage: successMessage
              });
            })["catch"](function (err) {
              console.log(err.message);
              res.render('error', {
                error: error
              });
            }));

          case 7:
            return _context4.abrupt("return", _context4.sent);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  // this is used to updated any change made to the admin information(Super Admin only)
  updateUser: function updateUser(req, res) {
    var userId, _req$body, firstName, lastName, email, phone, roleId, updatedUser;

    return regeneratorRuntime.async(function updateUser$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            userId = req.params.userId;
            console.log(userId);
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, phone = _req$body.phone, roleId = _req$body.roleId;
            console.log(req.body);
            _context5.next = 6;
            return regeneratorRuntime.awrap(User.update({
              firstName: firstName,
              lastName: lastName,
              email: email,
              phone: phone,
              roleId: roleId
            }, {
              where: {
                id: parseInt(userId)
              }
            }).then(function (results) {
              var currentUser = User.findOne({
                where: {
                  id: userId
                }
              });
              console.log(currentUser);

              if (req.session.user.id === currentUser.id) {
                req.session.user.roleId = roleId;
              }

              console.log('##########################');
              console.log(req.session.user);
              console.log('##########################');
            }).then(function (results) {
              res.redirect('/dashboard/users');
            })["catch"](function (error) {
              res.render('error', {
                error: error
              });
            }));

          case 6:
            updatedUser = _context5.sent;

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  // this controller is used by the super admin to switch between user status
  toggleStatus: function toggleStatus(req, res) {
    var userId, statusId;
    return regeneratorRuntime.async(function toggleStatus$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            userId = req.params.userId;
            statusId = req.body.statusId;
            console.log(req.body);
            console.log('user is', userId);

            if (!(userId == req.session.user.id)) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return", res.json({
              status: 'error',
              data: 'You cannot change your own status'
            }));

          case 6:
            _context6.next = 8;
            return regeneratorRuntime.awrap(User.update({
              statusId: statusId
            }, {
              where: {
                id: userId
              }
            }).then(function (result) {
              res.json({
                status: 'success',
                data: 'user status updated successfully'
              });
            })["catch"](function (error) {
              res.json({
                status: 'error',
                data: 'error updating user status'
              });
            }));

          case 8:
            return _context6.abrupt("return", _context6.sent);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  // lists all the password reset requests
  getAllResetRequests: function getAllResetRequests(req, res) {
    return regeneratorRuntime.async(function getAllResetRequests$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log('Getting all reset requests');

            if (!(req.session.user.Role.name == 'Super Admin')) {
              _context7.next = 7;
              break;
            }

            _context7.next = 4;
            return regeneratorRuntime.awrap(Request.findAll({
              include: [{
                model: Mail,
                required: false
              }, {
                model: RequestType,
                required: true
              }, {
                model: RequestStatus,
                required: true
              }, {
                model: User,
                required: true
              }],
              order: [['createdAt', 'DESC']],
              where: {
                requestStatus: 1,
                //completed
                requestType: 1 //Reset Password

              }
            }).then(function (results) {
              console.log(JSON.stringify(results)); // res.json({newMails})

              res.render('resetMails', {
                title: 'Reset requests',
                status: 'success',
                user: req.session.user,
                data: results,
                moment: require('moment'),
                axios: require('axios')
              });
            })["catch"](function (error) {
              res.render('error', {
                error: error
              });
            }));

          case 4:
            return _context7.abrupt("return", _context7.sent);

          case 7:
            _context7.next = 9;
            return regeneratorRuntime.awrap(Request.findAll({
              include: [{
                model: Mail,
                required: false
              }, {
                model: RequestType,
                required: true
              }, {
                model: RequestStatus,
                required: true
              }, {
                model: User,
                required: true
              }],
              order: [['createdAt', 'DESC']],
              where: {
                requestStatus: 1,
                //completed
                requestType: 1,
                //Reset Password
                userId: req.session.user.id //get only the mails reset by the logged in user

              }
            }).then(function (results) {
              console.log(JSON.stringify(results)); // res.json({newMails})

              res.render('resetMails', {
                title: 'Reset requests',
                status: 'success',
                user: req.session.user,
                data: results,
                moment: require('moment'),
                axios: require('axios')
              });
            })["catch"](function (error) {
              res.render('error', {
                error: error
              });
            }));

          case 9:
            return _context7.abrupt("return", _context7.sent);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    });
  },
  // Super Admin interface to change admin password
  passwordReset: function passwordReset(req, res) {
    var userId, passReset, saltRounds, hashedPassword, user;
    return regeneratorRuntime.async(function passwordReset$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            userId = req.params.userId;
            passReset = req.body.passReset;
            console.log('User id is as follows', userId);
            saltRounds = 10;
            _context8.next = 6;
            return regeneratorRuntime.awrap(bcrypt.hash('Welcome2023', saltRounds));

          case 6:
            hashedPassword = _context8.sent;
            console.log('this is the hashed password', hashedPassword);
            _context8.next = 10;
            return regeneratorRuntime.awrap(User.update({
              password: hashedPassword,
              passReset: passReset
            }, {
              where: {
                id: userId
              }
            }).then(function (result) {
              console.log('Response is ', result); // res.redirect('/dashboard/users?success=pass_changed')

              res.json({
                status: 'success',
                data: 'Password reset successfull'
              });
            })["catch"](function (err) {
              // res.redirect('/dashboard/users?error=pass_unchanged')
              res.json({
                status: 'error',
                data: 'Oops an error has occured while reseting password try again'
              });
            }));

          case 10:
            user = _context8.sent;

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  // this submits the password changed by logged in user via the modal
  ownPasswordReset: function ownPasswordReset(req, res) {
    var userId, _req$body2, password, passReset, saltRounds, hashedPassword, user;

    return regeneratorRuntime.async(function ownPasswordReset$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            userId = req.params.userId;
            _req$body2 = req.body, password = _req$body2.password, passReset = _req$body2.passReset;
            console.log('User id is as follows', userId);
            saltRounds = 10;
            _context9.next = 6;
            return regeneratorRuntime.awrap(bcrypt.hash(password, saltRounds));

          case 6:
            hashedPassword = _context9.sent;
            console.log('this is the hashed password', hashedPassword);
            _context9.next = 10;
            return regeneratorRuntime.awrap(User.update({
              password: hashedPassword,
              passReset: passReset
            }, {
              where: {
                id: userId
              }
            }).then(function (result) {
              console.log('Response is ', result);
              req.session.user.password = hashedPassword; // res.redirect('/dashboard?success=pass_changed')

              res.json({
                status: 'success',
                data: 'Password reset successfull'
              });
            })["catch"](function (err) {
              // res.redirect('/dashboard?error=pass_unchanged')
              res.json({
                status: 'error',
                data: 'Oops an error has occured while reseting password try again'
              });
            }));

          case 10:
            user = _context9.sent;

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    });
  },
  // Imports mails via csv files
  importMails: function importMails(req, res) {
    var mails;
    return regeneratorRuntime.async(function importMails$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            try {
              mails = [];
              fs.createReadStream(req.file.path).pipe(csv()).on('data', function (row) {
                mails.push(row);
                console.log("*******MAils*****", mails);
              }).on('end', function _callee2() {
                return regeneratorRuntime.async(function _callee2$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return regeneratorRuntime.awrap(Mail.bulkCreate(mails));

                      case 2:
                        // feedback
                        res.status(200).json({
                          status: 'success',
                          data: 'Mails imported successfully'
                        });

                      case 3:
                      case "end":
                        return _context10.stop();
                    }
                  }
                });
              });
            } catch (error) {
              console.log('Error importing mails', error);
              res.status(500).json({
                status: 'error',
                data: 'Failed to import mails'
              });
            }

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    });
  },
  getImportForm: function getImportForm(req, res) {
    var mails;
    return regeneratorRuntime.async(function getImportForm$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return regeneratorRuntime.awrap(Mail.findAll({
              include: [{
                model: Department,
                required: false
              }],
              order: [['createdAt', 'DESC']]
            }).then(function (mails) {
              // console.log(mails);
              // res.json({
              //     status: 'success',
              //     data: mails
              // });
              res.render('importForm', {
                title: 'Import Mails',
                status: 'success',
                user: req.session.user,
                data: mails,
                moment: require('moment'),
                axios: require('axios')
              });
            })["catch"](function (err) {
              res.render('error', {
                error: err
              });
            }));

          case 2:
            mails = _context12.sent;

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    });
  }
};