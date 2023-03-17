const express = require('express');
const port = 8000;

const db = require('./config/connectiondb');
const todoModel = require('./modals/todolistdb');

const app = express();



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