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
    condition : {
        type : Number,
        Enumerator : [1, 0],
        default : 0
    },
    
}, {
    timestamps: true
});


const todoModel = mongoose.model('todoModel', todoSchema);

module.exports = todoModel;