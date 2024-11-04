const { task, json } = require('fp-ts');
const http = require('http');
const { hostname } = require('os');
const taskRoutes = require('./routes/taskRoutes');

const hostname = 'localhost'
const port = 8000
const server = http.CraeteServer((req,res)=>{
    if(req.url.startwich('/tasks')) {
        taskRoutes(req,res)
    }else{
        res.writeHead(404,'not found',{'content-type':'apliocation/json'})
        res.end(json.stringify({
            messge: 'sorr page not founded'
        }))
    }
    
server.listen(port,hostname,)
    console.log('server is euning on port ${port}')
})
