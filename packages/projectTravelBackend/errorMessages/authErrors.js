const AUTH_ERRORS = {
    sessionExpired: {msg:"Session Expired. Please login again", status: 401 },
    loginCredentialsNotFound: {msg: "Email is not Registered. Please Signup.", status: 401},
    loginPasswordWrong: {msg: "Password is invalid", status: 401},
    invalidEmailOrPassword: {msg: "Badly formatted Email or Password", status: 401},
};

module.exports = AUTH_ERRORS;