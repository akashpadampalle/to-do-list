// including mongoose library 
const mongoose = require('mongoose');


// creating schema of todo-item include is title, date, category, status
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    category: {
        type : String,
        default : 'personal'
    },
    status : {
        type : Number,
        Enumerator : [1, 0],
        default : 0
    },
    
}, {
    timestamps: true
});

// creating model using todoSchema and exporting it
const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;