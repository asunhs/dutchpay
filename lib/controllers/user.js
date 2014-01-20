'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');



exports = module.exports = function (app) {
    app.post('/api/user/:serviceName', function (req, res) {
        console.log(req.params.serviceName);
        return exports[req.params.serviceName](req, res);
    })
}


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
 * Register
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