const getAllTasks = (req,res)=>{
    res.send('all items from the files')
}

const createTask = (req,res)=>{
    res.send('create task')
}
const getTasks = (req,res)=>{
    res.send('Get Single Task')
}
const updateTasks = (req,res)=>{
    res.send('update task')
}
const deleteTasks = (req,res)=>{
    res.send('deltete task')
}

//object
module.exports = {
    getAllTasks,
    createTask,
    getTasks,
    updateTasks,
    deleteTasks
}