const express = require("express");
const { addTask, getAllTasks, getTasksById, updateTaskById, deleteTaskById } = require("../controllers/task");

const taskRouter = express.Router();

taskRouter.post('', addTask)

taskRouter.get('', getAllTasks)

taskRouter.get('/:id', getTasksById)

taskRouter.put('/:id', updateTaskById)

taskRouter.delete('/:id', deleteTaskById)

module.exports = taskRouter;