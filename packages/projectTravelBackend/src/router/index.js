var express = require('express');
var router = express.Router();

var notesHandler = require('./notesRouteHandlers');

router.post('/addnote', notesHandler.addNote);

module.exports = router;
