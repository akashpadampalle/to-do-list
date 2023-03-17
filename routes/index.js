// getting express and controller module to control routes
const express = require('express');
const route = express.Router();
const todoControl = require('../controllers/todo');


// home page route
route.get('/', todoControl.homePage);
// get route to send all the todo-items
route.get('/get', todoControl.getTodos);
// create a todo-item
route.post('/create', todoControl.createTodo);
// delete to do item using its id
route.delete('/delete/:id', todoControl.deleteTodo);
// change the status (check or uncheck)
route.patch('/change/:id/status/:status', todoControl.changeStatus);
// redirect any other request to nothing page 
route.get('*', todoControl.nothing);

module.exports = route;