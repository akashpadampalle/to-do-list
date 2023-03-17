
// requiring mongoose
const mongoose = require('mongoose');

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/todolist_db');

//getting connection to check whether it is successfull or not
const db = mongoose.connection;


//print error if there
db.on('error', console.error.bind(console, "Error to connect"));

//print successfull message
db.once('open', function(){
    console.log('connect to database 👌🏻')
});


module.exports = db;