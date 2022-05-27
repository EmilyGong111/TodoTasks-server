const tasks = [];
let id=1;

const addTask = (req, res)=>{
    const {description}=req.body;
    const done= false; 
    tasks.push({id, description, done})
    res.json({id, description, done});
    id++;
    console.log(tasks);
}


const getAllTasks = (req,res)=>{
    const {description} = req.query;
    const filteredTask = tasks.filter((task) => task.description.includes(description));
    if (!description)res.send(tasks);
    else res.send(filteredTask);
};

const getTasksById = (req,res)=>{
    console.log(req.params);
    const{id}=req.params;
    const selectedTask=tasks.find(task=>task.id === Number(id));
    if(!selectedTask){
        res.status(404).send("Task not found!");
        return
    }
    res.json(selectedTask);
}

const updateTaskById = (req, res)=>{
    const{id}=req.params;
    const{description, done}=req.body;
    const taskIndex=tasks.findIndex(task=>task.id === Number(id));
    if(!taskIndex){
        res.status(404).send("Task not found!");
        return
    }
    tasks[taskIndex].description=description;
    tasks[taskIndex].done= !!done;
    res.json({id, description, done});
}

const deleteTaskById = (req,res)=>{
    const{id}=req.params;
    const selectedTask=tasks.findIndex(task=>task.id === Number(id));
    if(!selectedTask){
        res.status(404).send("Task not found!");
        return
    }
    tasks.pop(selectedTask);
    res.sendStatus(204)
    console.log(tasks);
}

module.exports = {
    getAllTasks,
    getTasksById,
    updateTaskById,
    deleteTaskById,
    addTask,
}