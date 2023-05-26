"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../utils/send_mail'),
    sendMail = _require.sendMail;

var _require2 = require('../utils/whatsapp'),
    whatsappText = _require2.whatsappText;

var sendSms = require('../utils/sendSms');

var _require3 = require('../models'),
    Mail = _require3.Mail,
    Department = _require3.Department,
    Trial = _require3.Trial,
    Request = _require3.Request,
    User = _require3.User;

var userMails = function userMails() {
  var users, emails;
  return regeneratorRuntime.async(function userMails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findAll({
            attributes: ['email'],
            where: {
              statusId: 1
            }
          }));

        case 3:
          users = _context.sent;
          emails = users.map(function (user) {
            return user.email;
          });
          console.log(emails);
          return _context.abrupt("return", emails);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          throw _context.t0;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

module.exports = {
  createMail: function createMail(req, res) {
    var _req$body, fullName, email, password, department, phone, mail, dprt, lowercaseMail, mailData;

    return regeneratorRuntime.async(function createMail$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, fullName = _req$body.fullName, email = _req$body.email, password = _req$body.password, department = _req$body.department, phone = _req$body.phone; // check existing

            _context3.next = 3;
            return regeneratorRuntime.awrap(Mail.findOne({
              where: {
                email: email
              }
            }));

          case 3:
            mail = _context3.sent;

            if (!mail) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.json({
              status: 'error',
              data: 'This request has already been resolved'
            }));

          case 6:
            _context3.next = 8;
            return regeneratorRuntime.awrap(Department.findOne({
              where: {
                name: department
              }
            }));

          case 8:
            dprt = _context3.sent;
            lowercaseMail = email.toLowerCase();
            mailData = {
              name: fullName,
              email: lowercaseMail,
              password: 'Welcome2020!',
              departmentId: dprt.id,
              phone: phone
            };
            console.log('Received request');
            console.log(req.body); // const NewMail = await Mail.create(mailData)

            _context3.next = 15;
            return regeneratorRuntime.awrap(Mail.create(mailData).then(function (newMail) {
              var updatedStatus = Request.update({
                requestStatus: 1,
                userId: req.session.user.id
              }, {
                where: {
                  fullName: fullName,
                  requestType: 2
                }
              });
            }).then(function _callee(newMail) {
              var mailUser, recipient, _fullName$split, _fullName$split2, firstName, lastName;

              return regeneratorRuntime.async(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return regeneratorRuntime.awrap(Request.findOne({
                        where: {
                          email: email
                        }
                      }));

                    case 2:
                      mailUser = _context2.sent;
                      // Send feedback to the Mail user
                      recipient = parseInt(mailUser.phone); // seperate first and last name from full name

                      _fullName$split = fullName.split(' '), _fullName$split2 = _slicedToArray(_fullName$split, 2), firstName = _fullName$split2[0], lastName = _fullName$split2[1]; // send an sms to user

                      sendSms(recipient, "Dear ".concat(firstName, ", We are pleased to inform you that your email ").concat(mailUser.email, " has been created. You can now proceed to log in to your account. Password:'").concat(mailData.password, "'.\n Regards ").concat(req.session.user.firstName));
                      console.log("".concat(newMail, " created"));
                      res.json({
                        status: 'success',
                        data: 'Email has been created successfully'
                      });

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            })["catch"](function (err) {
              console.log('Mail creation failed' + err.message);
              res.json({
                status: 'error',
                data: err.message
              });
            }));

          case 15:
            return _context3.abrupt("return", _context3.sent);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  getMailById: function getMailById(req, res) {
    var id, mail;
    return regeneratorRuntime.async(function getMailById$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return regeneratorRuntime.awrap(Mail.findByPk(id).then(function (mail) {
              console.log(mail);
              res.json({
                status: 'success',
                data: mail
              });
            })["catch"](function (err) {
              res.json({
                status: 'error',
                data: err.message
              });
            }));

          case 3:
            mail = _context4.sent;

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  getAllMail: function getAllMail(req, res) {
    var mails;
    return regeneratorRuntime.async(function getAllMail$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(Mail.findAll().then(function (mails) {
              console.log(mails);
              res.json({
                status: 'success',
                data: mails
              });
            })["catch"](function (err) {
              res.json({
                status: 'error',
                data: err.message
              });
            }));

          case 2:
            mails = _context5.sent;

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  checkMail: function checkMail(req, res) {
    var _req$body2, firstName, lastName, department, dpt, JoinName, fullName, mail;

    return regeneratorRuntime.async(function checkMail$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            JoinName = function _ref(fname, lname) {
              var fullName = "".concat(fname, " ").concat(lname);
              return fullName;
            };

            //This checks for existing mails
            _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, department = _req$body2.department; // find department by name provided by user note it comes as id from the selected department name

            _context6.next = 4;
            return regeneratorRuntime.awrap(Department.findOne({
              where: {
                id: department
              }
            }));

          case 4:
            dpt = _context6.sent;
            console.log('This is the department', JSON.stringify(dpt));
            ;
            fullName = JoinName(firstName, lastName);
            _context6.next = 10;
            return regeneratorRuntime.awrap(Mail.findOne({
              include: Department,
              where: {
                name: fullName
              }
            }).then(function (mail) {
              console.log(JSON.stringify(mail));
              console.log('This user is ' + fullName);
              console.log('DepartmentId is ' + department);

              if (!mail) {
                var failedTrial = {
                  credentials: fullName,
                  typeId: 1,
                  statusId: 1,
                  departmentId: department
                };
                var newTrial = Trial.create(failedTrial);
                return res.render('serp', {
                  status: 'warning',
                  data: "There is no email under that name. Please Check your spelling before sending an email creation request.",
                  current: {
                    firstName: firstName,
                    lastName: lastName,
                    dpt: dpt
                  }
                });
              }

              if (mail) {
                // mail has been found
                // This update the departmentId to the email that has been found 
                return Mail.update({
                  departmentId: department
                }, {
                  where: {
                    id: mail.id
                  }
                });
              }
            }).then(function (updatedMail) {
              if (updatedMail) {
                console.log(JSON.stringify(updatedMail));
                return Mail.findOne({
                  include: Department,
                  where: {
                    name: fullName
                  }
                });
              }
            }).then(function (updatedMail) {
              if (updatedMail) {
                // This will add a mail check success attempt
                console.log(JSON.stringify(updatedMail));
                var trialData = {
                  credentials: updatedMail.name,
                  typeId: 1,
                  statusId: 2,
                  departmentId: updatedMail.departmentId
                };
                var newTrial = Trial.create(trialData); // return the two objects as an array

                return [newTrial, updatedMail];
              }
            }).then(function (result) {
              if (result) {
                console.log(JSON.stringify(result[0]));
                res.render('serp', {
                  status: 'success',
                  data: result[1]
                });
              }
            })["catch"](function (err) {
              res.render('serp', {
                status: 'error',
                data: err.message,
                current: {
                  firstName: firstName,
                  lastName: lastName
                }
              });
            }));

          case 10:
            mail = _context6.sent;

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    });
  },
  getMailByName: function getMailByName(req, res) {
    var _req$body3, firstName, lastName, department, dpt, JoinName, fullName, mail;

    return regeneratorRuntime.async(function getMailByName$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            JoinName = function _ref2(fname, lname) {
              var fullName = "".concat(fname, " ").concat(lname);
              return fullName;
            };

            //This checks for existing mails
            _req$body3 = req.body, firstName = _req$body3.firstName, lastName = _req$body3.lastName, department = _req$body3.department; // find department by name provided by user note it comes as id from the selected department name

            _context8.next = 4;
            return regeneratorRuntime.awrap(Department.findOne({
              where: {
                id: department
              }
            }));

          case 4:
            dpt = _context8.sent;
            console.log('This is the department', JSON.stringify(dpt)); // combine the first and last name

            ;
            fullName = JoinName(firstName, lastName);
            _context8.next = 10;
            return regeneratorRuntime.awrap(Mail.findOne({
              include: Department,
              where: {
                name: fullName
              }
            }).then(function _callee2(mail) {
              var allDepartments, failedTrial, newTrial;
              return regeneratorRuntime.async(function _callee2$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log(JSON.stringify(mail));
                      console.log('This user is ' + fullName);
                      console.log('DepartmentId is ' + department);

                      if (mail) {
                        _context7.next = 13;
                        break;
                      }

                      _context7.next = 6;
                      return regeneratorRuntime.awrap(Department.findAll());

                    case 6:
                      allDepartments = _context7.sent;
                      console.log("These are the departments", allDepartments);
                      failedTrial = {
                        credentials: fullName,
                        typeId: 1,
                        statusId: 1,
                        departmentId: department
                      }; // creating the failed trial for those who dint find their mails

                      _context7.next = 11;
                      return regeneratorRuntime.awrap(Trial.create(failedTrial));

                    case 11:
                      newTrial = _context7.sent;
                      return _context7.abrupt("return", res.render('serp', {
                        status: 'warning',
                        data: "There is no email under that name. Please Check your spelling before sending an email creation request.",
                        allDepartments: allDepartments,
                        current: {
                          firstName: firstName,
                          lastName: lastName,
                          dpt: dpt
                        }
                      }));

                    case 13:
                      if (!mail) {
                        _context7.next = 15;
                        break;
                      }

                      return _context7.abrupt("return", Mail.update({
                        departmentId: department
                      }, {
                        where: {
                          id: mail.id
                        }
                      }));

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              });
            }).then(function (updatedMail) {
              if (updatedMail) {
                console.log(JSON.stringify(updatedMail));
                return Mail.findOne({
                  include: Department,
                  where: {
                    name: fullName
                  }
                });
              }
            }).then(function (updatedMail) {
              if (updatedMail) {
                // This will add a mail check success attempt
                console.log(JSON.stringify(updatedMail));
                var trialData = {
                  credentials: updatedMail.name,
                  typeId: 1,
                  statusId: 2,
                  departmentId: updatedMail.departmentId
                };
                var newTrial = Trial.create(trialData); // return the two objects as an array

                return [newTrial, updatedMail];
              }
            }).then(function (result) {
              if (result) {
                console.log(JSON.stringify(result[0]));
                res.render('serp', {
                  status: 'success',
                  data: result[1]
                });
              }
            })["catch"](function (err) {
              res.render('serp', {
                status: 'error',
                data: err.message,
                current: {
                  firstName: firstName,
                  lastName: lastName
                }
              });
            }));

          case 10:
            mail = _context8.sent;

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    });
  },
  resetPass: function resetPass(req, res) {
    var _req$body4, department, fullName, email, phone, dprt, mailToReset, trialData, resetTrial, mail, userPhoneUpdated, recipient, _fullName$split3, _fullName$split4, firstName, lastName, admins;

    return regeneratorRuntime.async(function resetPass$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _req$body4 = req.body, department = _req$body4.department, fullName = _req$body4.fullName, email = _req$body4.email, phone = _req$body4.phone;
            console.log('This is the email to be reset', req.body); // get department details

            _context10.next = 5;
            return regeneratorRuntime.awrap(Department.findOne({
              where: {
                name: department
              }
            }));

          case 5:
            dprt = _context10.sent;
            _context10.next = 8;
            return regeneratorRuntime.awrap(Mail.findOne({
              where: {
                email: email
              }
            }));

          case 8:
            mailToReset = _context10.sent;
            // create a success trial
            trialData = {
              credentials: fullName,
              typeId: 2,
              statusId: 2,
              departmentId: dprt.id
            };
            _context10.next = 12;
            return regeneratorRuntime.awrap(Trial.create(trialData));

          case 12:
            resetTrial = _context10.sent;
            mail = {
              to: '5476benja@gmail.com',
              subject: 'Request for password reset',
              text: "Greetings! My name is ".concat(fullName, " from ").concat(department, " department, I would like to request a password reset for my email address, ").concat(email)
            }; // uodate mails by adding phone number to the user when they provide it

            if (phone) {
              userPhoneUpdated = Mail.update({
                phone: phone
              }, {
                where: {
                  email: email
                }
              });
              recipient = parseInt(phone); // seperate first and last name from full name

              _fullName$split3 = fullName.split(' '), _fullName$split4 = _slicedToArray(_fullName$split3, 2), firstName = _fullName$split4[0], lastName = _fullName$split4[1]; // send an sms to user

              sendSms(recipient, "Dear ".concat(firstName, ", we have received your request and we'll inform you when your email has been reset"));
            } // This block only sends email to the admins who are active


            _context10.prev = 15;
            _context10.next = 18;
            return regeneratorRuntime.awrap(userMails());

          case 18:
            admins = _context10.sent;
            // Send email to the Admins
            sendMail(mail.subject, mail.text, admins).then(function (response) {
              console.log('Mails have been delivered to the following', admins);
              console.log('Email sent successfully:', response);
            })["catch"](function (error) {
              console.error('Error sending email:', error);
            });
            _context10.next = 25;
            break;

          case 22:
            _context10.prev = 22;
            _context10.t0 = _context10["catch"](15);
            console.error(_context10.t0.message);

          case 25:
            // send whatsApp Message
            whatsappText(process.env.ADMIN1, mail.text).then(function _callee3(response) {
              var existingReq;
              return regeneratorRuntime.async(function _callee3$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return regeneratorRuntime.awrap(Request.findOne({
                        where: {
                          requestType: 1,
                          email: email,
                          requestStatus: 2
                        }
                      }));

                    case 2:
                      existingReq = _context9.sent;
                      return _context9.abrupt("return", existingReq);

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              });
            }).then(function (results) {
              // console.log("*******", results)
              if (!results) {
                var requestData = {
                  mailId: mailToReset.id,
                  requestType: 1,
                  requestStatus: 2,
                  email: email,
                  fullName: fullName,
                  department: dprt.name
                };
                var newRequest = Request.create(requestData);
                return res.json({
                  status: 'success',
                  data: "Your request has been submitted successfully"
                }); // return newRequest
              } else {
                console.log("************The request already exist ********");
                var data = {
                  requestStatus: 2
                }; // update the request if it exists

                var updatedRequest = Request.update(data, {
                  where: {
                    email: email,
                    requestType: 1,
                    requestStatus: 2
                  }
                });
                return res.json({
                  status: 'info',
                  data: "You submitted your request earlier, the admins have been reminded"
                }); // return updatedRequest
              }
            }) // .then(response => {
            //     res.json({
            //         status: 'success',
            //         data: response
            //     })
            // })
            ["catch"](function (error) {
              console.log(error.message);
              res.json({
                status: 'error',
                data: error
              });
            }); // Send Email
            // sendMail(mail.to, mail.subject, mail.text)
            //     .then((response) => {
            //         let requestData = {
            //             mailId: mailToReset.id,
            //             requestType: 1,
            //             requestStatus: 2,
            //             email: email,
            //             fullName: fullName,
            //             department: dprt.name
            //         }
            //         const newRequest = Request.create(requestData)
            //         console.log(response);
            //         // res.json({
            //         //     status: 'success',
            //         //     data: response
            //         // })
            //         return response;
            //     }).then(response => {
            //         res.json({
            //             status: 'success',
            //             data: response
            //         })
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         res.json({
            //             status: 'error',
            //             data: error
            //         })
            //     })

            _context10.next = 31;
            break;

          case 28:
            _context10.prev = 28;
            _context10.t1 = _context10["catch"](0);
            res.json({
              status: 'error',
              data: _context10.t1.message
            });

          case 31:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 28], [15, 22]]);
  },
  requestNewMail: function requestNewMail(req, res) {
    var _req$body5, firstName, lastName, department, phone, fullName, newMail, mailToCreate, dprt, trialData, requestTrial, mail, recipient, _fullName$split5, _fullName$split6, _firstName, _lastName, admins;

    return regeneratorRuntime.async(function requestNewMail$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _req$body5 = req.body, firstName = _req$body5.firstName, lastName = _req$body5.lastName, department = _req$body5.department, phone = _req$body5.phone;
            fullName = "".concat(firstName, " ").concat(lastName);
            newMail = "".concat(firstName, ".").concat(lastName, "@taitataveta.go.ke");
            mailToCreate = newMail.toLowerCase(); // get departmentId

            _context12.next = 7;
            return regeneratorRuntime.awrap(Department.findOne({
              where: {
                id: department
              }
            }));

          case 7:
            dprt = _context12.sent;
            // create a success trial
            trialData = {
              credentials: fullName,
              typeId: 3,
              statusId: 2,
              departmentId: dprt.id
            };
            _context12.next = 11;
            return regeneratorRuntime.awrap(Trial.create(trialData));

          case 11:
            requestTrial = _context12.sent;
            mail = {
              // from: 'mwanyikajohn@outlook.com',
              to: '5476benja@gmail.com',
              subject: 'Request for email creation',
              text: "Greetings! There is a request to create an email for ".concat(fullName, " from ").concat(dprt.name, " department")
            }; // if user provides a phone number send them a successful submission sms 

            if (phone) {
              recipient = parseInt(phone);
              console.log('######### Phone is', recipient); // seperate first and last name from full name

              _fullName$split5 = fullName.split(' '), _fullName$split6 = _slicedToArray(_fullName$split5, 2), _firstName = _fullName$split6[0], _lastName = _fullName$split6[1]; // send an sms to user

              sendSms(recipient, "Dear ".concat(_firstName, ", we have received your request and we'll inform you when your email has been created. Regards ICT support"));
            } // This block only sends email to the admins who are active


            _context12.prev = 14;
            _context12.next = 17;
            return regeneratorRuntime.awrap(userMails());

          case 17:
            admins = _context12.sent;
            // Send email to the Admins
            sendMail(mail.subject, mail.text, admins).then(function (response) {
              console.log('mails have been delivered to the following', admins);
              console.log('Email sent successfully:', response);
            })["catch"](function (error) {
              console.error('Error sending email:', error);
            });
            _context12.next = 24;
            break;

          case 21:
            _context12.prev = 21;
            _context12.t0 = _context12["catch"](14);
            console.error(_context12.t0);

          case 24:
            // Send WhatsApp Message
            whatsappText(process.env.ADMIN1, mail.text).then(function (response) {
              console.log(response); // check if request exists

              return Request.findOne({
                where: {
                  email: mailToCreate
                }
              });
            }).then(function _callee4(isExisting) {
              var existingMail, requestData, newRequest, data, updatedRequest;
              return regeneratorRuntime.async(function _callee4$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return regeneratorRuntime.awrap(Mail.findOne({
                        where: {
                          email: mailToCreate
                        }
                      }));

                    case 2:
                      existingMail = _context11.sent;

                      if (!existingMail) {
                        _context11.next = 5;
                        break;
                      }

                      return _context11.abrupt("return", res.json({
                        status: 'info',
                        data: "We kindly inform you that an email with the name you provided has already been registered by the administrator. Please consider using a different email address or contacting the administrator for further assistance."
                      }));

                    case 5:
                      requestData = {
                        mailId: null,
                        requestType: 2,
                        requestStatus: 2,
                        email: mailToCreate,
                        fullName: fullName,
                        department: dprt.name,
                        phone: phone
                      };

                      if (isExisting) {
                        _context11.next = 11;
                        break;
                      }

                      // if (existingMail) {
                      //     // return existingMail
                      //     return res.json({
                      //         status: 'warning',
                      //         data: "An email has been found under that name."
                      //     });
                      // } else {
                      newRequest = Request.create(requestData); // return newRequest;

                      return _context11.abrupt("return", res.json({
                        status: 'success',
                        data: "We are pleased to inform you that your email creation request has been sent successfully. The admins will review it promptly. Thank you for your submission."
                      }));

                    case 11:
                      data = {
                        requestStatus: 2
                      };
                      updatedRequest = Request.update(data, {
                        where: {
                          email: mailToCreate,
                          requestType: 2
                        }
                      }); // return updatedRequest;

                      return _context11.abrupt("return", res.json({
                        status: 'info',
                        data: "We have notified the administrators about a similar request and appreciate you bringing it to our attention."
                      }));

                    case 14:
                    case "end":
                      return _context11.stop();
                  }
                }
              });
            }) // .then(response => {
            //     console.log(JSON.stringify(response));
            //     res.json({
            //         status: 'success',
            //         data: response,
            //     })
            // })
            ["catch"](function (error) {
              console.log(error.message);
              res.json({
                status: 'error',
                data: error
              });
            }); // sendMail(mail.to, mail.subject, mail.text)
            //     .then((response) => {
            //         console.log(response);
            //         let requestData = {
            //             mailId: null,
            //             requestType: 2,
            //             requestStatus: 2,
            //             email: mailToCreate,
            //             fullName: fullName,
            //             department: dprt.name
            //         }
            //         const newRequest = Request.create(requestData)
            //         return response;
            //     }).then(response => {
            //         res.json({
            //             status: 'success',
            //             data: response
            //         })
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         res.json({
            //             status: 'error',
            //             data: error
            //         })
            //     })

            _context12.next = 31;
            break;

          case 27:
            _context12.prev = 27;
            _context12.t1 = _context12["catch"](0);
            console.log(_context12.t1.message);
            res.json({
              status: 'error',
              data: _context12.t1
            });

          case 31:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, [[0, 27], [14, 21]]);
  },
  home: function home(req, res) {
    var departments;
    return regeneratorRuntime.async(function home$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return regeneratorRuntime.awrap(Department.findAll().then(function (allDepartments) {
              res.render('home', {
                status: 'error',
                data: allDepartments
              });
            })["catch"](function (err) {
              console.log(err);
              res.render('error', {
                status: 'error',
                error: err,
                message: err.message
              });
            }));

          case 2:
            departments = _context13.sent;

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    });
  },
  completeReset: function completeReset(req, res) {
    var _req$body6, fullName, email, department, dprt, updatedRequest;

    return regeneratorRuntime.async(function completeReset$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$body6 = req.body, fullName = _req$body6.fullName, email = _req$body6.email, department = _req$body6.department;
            _context15.next = 3;
            return regeneratorRuntime.awrap(Department.findOne({
              where: {
                name: department
              }
            }));

          case 3:
            dprt = _context15.sent;
            _context15.next = 6;
            return regeneratorRuntime.awrap(Request.update({
              requestStatus: 1,
              userId: req.session.user.id
            }, {
              where: {
                requestType: 1,
                fullName: fullName
              }
            }).then(function _callee5(response) {
              var mailUser, recipient, _fullName$split7, _fullName$split8, firstName, lastName;

              return regeneratorRuntime.async(function _callee5$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return regeneratorRuntime.awrap(Mail.findOne({
                        where: {
                          email: email
                        }
                      }));

                    case 2:
                      mailUser = _context14.sent;
                      // Send feedback to the Mail user
                      recipient = parseInt(mailUser.phone); // seperate first and last name from full name

                      _fullName$split7 = fullName.split(' '), _fullName$split8 = _slicedToArray(_fullName$split7, 2), firstName = _fullName$split8[0], lastName = _fullName$split8[1]; // send an sms to user

                      sendSms(recipient, "Dear ".concat(firstName, ", We are pleased to inform you that your email has been successfully reset. You can now proceed to log in to your account without any issues. regards ").concat(req.session.user.firstName));
                      console.log(response);
                      res.json({
                        status: 'success',
                        data: 'Password reset completed successfully'
                      });

                    case 8:
                    case "end":
                      return _context14.stop();
                  }
                }
              });
            })["catch"](function (error) {
              res.json({
                status: 'error',
                data: error.message
              });
            }));

          case 6:
            updatedRequest = _context15.sent;

          case 7:
          case "end":
            return _context15.stop();
        }
      }
    });
  } // newlyCreatedMails: async (req, res) => {
  //     return await Request.findAll({
  //             where: {
  //                 requestStatus: 1, //completed
  //                 requestType: 2 //create New Mail
  //             }
  //         })
  //         .then((newMails) => {
  //             res.render('newMails', {
  //                 status: 'success',
  //                 data: newMails
  //             })
  //         })
  //         .catch((error) => {
  //             res.render('error', {
  //                 error: error
  //             })
  //         });
  // }

};