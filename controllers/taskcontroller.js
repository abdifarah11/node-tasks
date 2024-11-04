const { readerTask, json } = require("fp-ts")

exports.getTask = (req,res)=>{
    const task = readTaskFromFile();
    res.writeHead(200,{ 'content-type':'aplication/json '})
    res.end(json.stringif(task))
}
exports.createTask= (res.req)=>{

}