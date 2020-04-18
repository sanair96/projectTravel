const app = require('express')();
const apiRouter = require('./src/router/apiRouter');
const authRouter = require('./src/router/authRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: './env/.env' })

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/auth', authRouter);
app.use('/api',apiRouter);

app.listen(5000,()=>{
    console.log("Listening on port 5000");
});
