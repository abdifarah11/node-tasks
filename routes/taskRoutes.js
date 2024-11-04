const { json } = require("fp-ts");
const { createTask } = require("../controllers/taskcontroller");

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
    res.writeHead(404, 'data is not found ',{'content-type': 'aplication/json '})
    res.end(json.stringify({
        message:'unknown method request .'

    }))
}
     }
module.exports = taskRoutes;