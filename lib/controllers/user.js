'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    User = mongoose.model('User'),
    encryption = function (str) {
        var sha = crypto.createHash('sha1');
        sha.update(str);
        return sha.digest('hex');
    };

exports = module.exports = function (app) {
    app.post('/api/user/:serviceName', function (req, res) {
        return exports[req.params.serviceName](req, res);
    });
}


/**
 * Login
 */
exports.login = function(req, res) {
    return User.findOne({'id' : req.param('id'), 'password' : encryption(req.param('password'))}, 'id nick', function (err, user) {
        if (!err) {
            req.session.user = user;
            return res.json(user);
        } else {
            return res.send(err);
        }
    });
};


exports.logout = function(req, res) {
    delete req.session.user;
    return res.redirect('/');
};




exports.info = function(req, res) {
    return res.json(req.session.user);
};


/**
 * Get Session Info
 */
exports.session = function(req, res) {
    return res.json(req.session);
};


/**
 * Register
 */
exports.register = function(req, res) {
    
    console.log('register', {'id' : req.param('id'), 'password' : encryption(req.param('password'))});
    
    var user = new User();
    
    user.id = req.param('id');
    user.nick = req.param('nick');
    user.password = encryption(req.param('password'));
    
    user.save(function (err, product, numberAffected) {
        if (!err) {
            return res.json({ id : user.id, nick : user.nick });
        } else {
            return res.send(err);
        }
    });
};