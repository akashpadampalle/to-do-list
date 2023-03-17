const express = require('express');
const route = express.Router();
const todoControl = require('../controllers/todo');

route.use(express.urlencoded());

route.get('/', todoControl.getTodos);
route.post('/create', todoControl.createTodo);
route.delete('/delete/:id', todoControl.deleteTodo);
route.patch('/change/:id/status/:status', todoControl.changeStatus);

module.exports = route;