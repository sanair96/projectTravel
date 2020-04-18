var express = require('express');
var notesRouter = express.Router();


const notesHandler = require('./notesRouteHandlers');
const authHandler = require('../authRouter/authHandlers');

notesRouter.post('/addnote', authHandler.authenticateUser, notesHandler.addNote);
notesRouter.delete('/deletenote', authHandler.authenticateUser, notesHandler.deleteNote);


module.exports = notesRouter;
