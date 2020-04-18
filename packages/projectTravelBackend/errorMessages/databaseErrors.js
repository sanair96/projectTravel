const DB_ERRORS = {
    failedToCreate: {
        error: 1,
        msg: "Couldn't process the submission",
    },
    failedToDelete: {
        error: 2,
        msg: "Couldn't delete the requested item"
    }
}

module.exports = DB_ERRORS;