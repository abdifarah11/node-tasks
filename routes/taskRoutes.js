const { json } = require("fp-ts");

const taskRoutes = (res,req)=>{
if (req.method === 'GET') {
    gotTasks(req,res);
    
} else if(req === 'POST'){
createTasks(req,res)
}else if(req === 'PATCH'){
    updateTasks(req,res )
}else if(req === 'DELETE'){
    deleteTasks(req,res)
}else{
    res.writeHead(404, 'data is not found ',{'content-type': 'aplication/json '})
    res.end(json.stringify({
        message:'unknown method request .'

    }))
}
     }
module.exports = taskRoutes;