'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport');

module.exports = function(app) {
    // User Routes
    var users = require('../controllers/user.controller');
    var donars = require('../controllers/donars.controller');
    /*app.route('/users')
        .get(users.list);

    // Setting up the users profile api
    app.route('/users/me').get(users.me);

    app.route('/users/:updateUserId')
        .put(users.update);
    app.param('updateUserId');*/

    //app.route('/users/accounts').delete(users.removeOAuthProvider);

    app.route('/users/create')
        .get(users.signup);
    app.route('/auth/signup')
        .post(users.signup);

    // Setting up the users password api
    /*app.route('/users/password').post(users.changePassword);
    app.route('/auth/forgot').post(users.forgot);
    app.route('/auth/reset/:token').get(users.validateResetToken);
    app.route('/auth/reset/:token').post(users.reset);*/

    // Setting up the users authentication api
    //app.route('/auth/signup').post(users.signup);
    app.route('/auth/signin').post(users.signin);
    app.route('/auth/signout').get(users.signout);
    app.route('/resource-proxy/Java/proxy.jsp').get(donars.proxy);
    app.get('/zohoverify/verifyforzoho.html', function(req, res) {
        res.sendFile((__dirname + '/zohoverify/verifyforzoho.html'));
    });
    // Finish by binding the user middleware
    /*app.param('userId', users.userByID);*/
};
