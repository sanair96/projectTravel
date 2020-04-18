var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  {type: String, default: ''},
    email: {type: String, required:true},
    password:   {type: String, required:true},
    firstName: {type: String, default: ''},
    middleName: {type: String, default: ''},
    lastName: {type:String, default: ''},
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;