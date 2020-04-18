const jwt = require('jsonwebtoken');

const signPayload = (payload, secret = process.env.SECRET, expiresIn = '24h') => {
    return jwt.sign({data:payload}, secret, {expiresIn})
}

const validJWT = (token, secret = process.env.SECRET) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (e) {
        return null
    }
}

module.exports = {
    signPayload,
    validJWT
};