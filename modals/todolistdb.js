const mongoose = require('mongoose');

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
        Enumerator : ['work', 'school', 'personal', 'study'],
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


const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;