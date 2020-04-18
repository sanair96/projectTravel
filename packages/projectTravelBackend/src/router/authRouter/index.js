var express = require('express');
var authRouter = express.Router();

const authHandler = require('./authHandlers');

authRouter.route('/login')
.get((req, res) => {
    res.send({data: "Login page"});
})
.post(authHandler.login);

authRouter.post('/signup', authHandler.signup);
authRouter.get('/checkloginstatus', authHandler.checkLoginStatus)

module.exports = authRouter;