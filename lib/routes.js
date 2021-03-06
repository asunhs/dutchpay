'use strict';

var api = require('./controllers/api'),
    filter = require('./controllers/filter'),
    user = require('./controllers/user'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  app.get('/session', user.session);
  app.get('/logout', user.logout);
  

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);

  user(app);
  filter(app);
    
};