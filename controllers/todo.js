const db = require('../config/connectiondb');
const todoModel = require('../modals/todolistdb');



module.exports.getTodos = function(req, res){
    //TODO: return list of todos
    try {
        todoModel.find({})
        .then((data) => res.json(data));
    } catch (error) {
        console.log(error);
        res.json({
            status : 400,
            message : 'unable to fetch todo'
        });
    }
}


module.exports.createTodo = async function(req, res){
    //TODO: create todo item
    try{
        const {title, date, category} = req.body;

        todoModel.create({
            "title" : title,
            "date" : new Date(date),
            "category" : category
        }).then((data) => res.json(data));
        
    }catch(error){
        console.log(error);
        res.json({
            status : 400,
            message : 'unable to create todo'
        });
    }
}

module.exports.deleteTodo = function(req, res){
    //TODO : delete todo item
    try {
        const id = req.params.id;
        todoModel.findByIdAndDelete(id)
        .then((data) => res.json(data));
    } catch (error) {
        console.log(error);
        res.json({
            status : 401,
            message : 'unable to delete todo' 
        })
    }
}

module.exports.changeStatus = function(req, res){
    //TODO : change condition of doto item
    try{
        const id = req.params.id;
        const s =req.params.status;
    
        if( !(s == 1 || s == 0) ){
            res.json({
                status : 400,
                message : "please provide legal status i.e [0 | 1]" 
            });
        }
        todoModel.findByIdAndUpdate(id, { status: s})
        .then((data) => res.json(data));
    }catch(error){
        console.log(error);
        res.json({
            status : 400,
            message : "unable to change the status" 
        });
    }
}