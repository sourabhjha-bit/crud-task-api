const mongoose = require('mongoose')

const connectionString = "mongodb+srv://sjha0164:sourabhjha@cluster0.xfoaeft.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(connectionString).then(()=>{
    console.log('connected to db..')
}).catch((err)=>{
    console.log(err)
})