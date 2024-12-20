const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks);


const port = 3000;

app.listen(port, console.log('Server is listening on port ${port}...' + port ))



// app.get('/api/v1/tasks')         --get all the tasks 
// app.post('/api/v1/tasks')           --create new task 
// app.get('/api/v1/tasks/:id')        --get single task 
// app.patch('/api/v1/tasks/:id')      --update 
// app.delete('/api/v1/tasks/:id')     --delete 
