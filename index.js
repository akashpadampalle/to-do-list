const express = require('express');
const port = 8000;

const db = require('./config/connectiondb');
const todoModel = require('./modals/todolistdb');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/', require('./routes/index'));


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