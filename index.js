// including express
const express = require('express');
const port = 8000;

// including database and todoModel
const db = require('./config/connectiondb');
const todoModel = require('./modals/todolistdb');


//getting express server into app variable
const app = express();

// setting view engin as ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// static files to use on browser such as style.css and script.js < as front end >
app.use(express.static('./static'));

// adding middleware to encode browser request
app.use(express.json());
app.use(express.urlencoded());

// setting routes file
app.use('/', require('./routes/index'));


// starting server to listen browser requests
try{
    app.listen(port, (err)=>{
        if(err){
            throw new Error("Unable to start Server");
        }
        console.log(`Server is running at ${port}`);
    })
}catch(Error){
    console.log(Error);
}