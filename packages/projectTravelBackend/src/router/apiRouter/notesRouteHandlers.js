const notesHandler = {};
const ERRORS = require("../../../errorMessages");
const Note = require("../../models/notesSchema");

notesHandler.addNote = (req, res) => {
  const { title, author, body } = req.body;
  const note = new Note({ title: title, author: author, body: body });
  note
    .save()
    .then((note, err) => {
      if (!err) res.send(note);
    })
    .catch(e => {
      res.send(ERRORS.dbErrors.failedToCreate);
    });
};

notesHandler.deleteNote = (req, res) => {
  const { id } = req.body;
  Note.deleteOne({ _id: id }).then(({ deletedCount }) => {
    if (deletedCount) {
      res.send({ msg: "deleted" });
    } else {
      res.send(ERRORS.dbErrors.failedToDelete);
    }
  });
};

notesHandler.updateNote = (req, res) => {
  const { id, title, body, author } = req.body;
  Note.updateOne({ _id: id }, { title, body, author }).then(RETDATA => {
    res.send("done");
  });
};

module.exports = notesHandler;
