const getAllTasks = (req, res) => { 
    res.send('all items from controller')
}

const createTask = (req, res) => { 
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({body: req.params.id})
}

const updateTask = (req, res) => { 
    res.send('update item')
}

const deleteTask = (req, res) =>{
    res.send('task deleted')
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
}