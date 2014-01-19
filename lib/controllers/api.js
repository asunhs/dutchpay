'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    User = mongoose.model('User');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};


/**
 * Login
 */
exports.login = function(req, res) {
    
    return User.find({'id' : req.param('id'), 'password' : req.param('password')}, 'id nick', function (err, users) {
        if (!err) {
            return res.json(users);
        } else {
            return res.send(err);
        }
    });
};


/**
 * Login
 */
exports.register = function(req, res) {
    
    console.log('register', {'id' : req.param('id'), 'password' : req.param('password')});
    
    var user = new User();
    
    user.id = req.param('id');
    user.nick = req.param('nick');
    user.password = req.param('password');
    
    user.save(function (err, product, numberAffected) {
        if (!err) {
            return res.json([user]);
        } else {
            return res.send(err);
        }
    });
};


