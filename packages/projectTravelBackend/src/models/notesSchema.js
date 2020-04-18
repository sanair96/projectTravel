var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
title:  {type: String, required:true},
author: {type: String, required:true},
body:   {type: String, required:true},
date: { type: Date, default: Date.now },
hidden: {type:Boolean, default: false},
meta: {
    votes: {type:Number,default:0},
    favs:  {type:Number,default:0}
}
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;