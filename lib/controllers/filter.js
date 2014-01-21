'use strict'

exports = module.exports = function (app) {
    app.all('/*', function (req, res, next) {
        console.log('filtered!', req.session);
        
        if (!req.session.user) {
            res.redirect('/');
        }
        next();
    });
};