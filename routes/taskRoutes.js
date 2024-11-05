const { JSON } = require("fp-ts");
const { createTask, gotTask, updateTask, deleteTask } = require("../controllers/taskcontroller");

const taskRoutes = (res,req)=>{
if (req.method === 'GET') {
gotTask(req,res);
    
} else if(req === 'POST'){
createTask(req,res)
}else if(req === 'PATCH'){
    updateTask(req,res )
}else if(req === 'DELETE'){
    deleteTask(req,res)
}else{
    res.writeHead(404, 'data is not found ',{'content-type': 'aplication/JSON '})
    res.end(JSON.stringify({
        message:'unknown method request .'

    }))
}
     }
module.exports = taskRoutes;
