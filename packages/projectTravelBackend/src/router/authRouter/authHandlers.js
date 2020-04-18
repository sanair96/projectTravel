const authHandlers = {};
const ERRORS = require('../../../errorMessages');
const User = require('../../models/userSchema');
const Utils = require('../../../utils');
const regex = require('../../../constants/regex');

const selectedAuthFields = "firstName middleName lastName email"

authHandlers.login = (req,res) => {
    const { email, password } = req.body;

    if (regex.email.test(email) && regex.password.test(password)) {

        User.findOne({email: email}).exec((err, user) => {
            if (err) {
                res.send(ERRORS.genericErrors.somethingWentWrong);
                return;
            }
            if(user === undefined || user === null) {
                res.send(ERRORS.authErrors.loginCredentialsNotFound);
                return;
            }
            Object.defineProperty(user, 'GridOrder', {configurable: true})
            if(Utils.compareUtils.equals(user.password, password) && Utils.compareUtils.equals(user.email, email)) {
                delete user.password;
                delete user.__v;
                console.log(user)
                const token = Utils.jwtUtils.signPayload(user);
                res.send({token: token, authUser: user});
            } else {
                res.send(ERRORS.authErrors.loginPasswordWrong);
            }
        });
    } else {
        res.send(ERRORS.authErrors.invalidEmailOrPassword);
    }
    
};

authHandlers.signup = (req, res) => {
    const { email, password } = req.body;
    const user = new User({email, password});
    if (regex.email.test(email) && regex.password.test(password)) {
        user.save().then((user, err)=> {
            if(!err) {
                const token = Utils.jwtUtils.signPayload(user);
                res.send({token: token, authUser: user});
            }
        }).catch(e => {
            console.log(e)
            res.send(ERRORS.dbErrors.failedToCreate);
        });
    } else {
        res.send(ERRORS.authErrors.invalidEmailOrPassword);
    }
}


authHandlers.checkLoginStatus = (req, res) => {
    var auth = req.get("authorization");
    if(auth) {
        const token = auth.split(' ')[1];
        const tokenData = Utils.jwtUtils.validJWT(token);
        if(tokenData) {
            res.send({msg: "Success", status: 200, authUser: tokenData});
            return; 
        }
    }
    res.status(401).send(ERRORS.authErrors.sessionExpired);
}

authHandlers.authenticateUser = (req,res,next) => {
    var auth = req.get("authorization");
    if(auth) {
        const token = auth.split(' ')[1];
        const tokenData = Utils.jwtUtils.validJWT(token);
        if(tokenData) {
            next();
            return;
        }
    }
    res.status(401).send(ERRORS.authErrors.sessionExpired);
};

module.exports = authHandlers;