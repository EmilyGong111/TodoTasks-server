const express = require('express');
const taskRouter = require('./task');

const v1Router = express.Router();

v1Router.use('/tasks', taskRouter);// any path start with /tasks can be access ->.use | only the path is /tasks can be access -> .get

module.exports = v1Router;