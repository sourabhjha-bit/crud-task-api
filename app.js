const express = require('express')
const app = express()
const tasks = require('./routes/task')
require('./db/connect')
//middleware

app.use(express.json())

app.get('/hello', (req, res)=>{
    res.send('task manager')
})

app.use('/api/tasks', tasks)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log('server is started at ' + PORT)
})