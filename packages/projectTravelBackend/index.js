const app = require('express')();
const router = require('./src/router');

app.use('/api',router);

app.listen(5000,()=>{
    console.log("Listening on port 3000");
});