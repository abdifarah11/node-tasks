const {IncomingForm} = require("formidable");
const {readtasksfromfile, writeTasksTofile} = require("../utils/filehandling");
const{copyfileSync}=require('fs');
 //const { readerTask, json } = require("fp-ts")
// const  require=(formidable)
const { error } = require("fp-ts/lib/Console");
const { id } = require("fp-ts/lib/Refinement");
const { copy } = require("fp-ts/lib/NonEmptyArray");
const path = require("path");
exports.gotTask = (req,res)=>{
    const tasks = readtasksfromfile();
    res.writeHead(200,{ 'content-type':'aplication/json '})
    res.end(JSON.stringify(task))
}
exports.createTask= (res,req)=>{
const form = new IncomingForm();

form.parse(req,(error,Fields,files )=>{
if(error){
 res.writeHead(400,{'content-type':'aplication/JSON'})
 res.end(JSON.stringify({
    message: 'error passing from '
 }))
 return
}
const task= readtasksfromfile();
const newTask={
    id:Date.now(),
    Title:Fields.Title,
    decription:Fields?.descriptoin|| '',
    status:Fields?.status|| 'pending',
    Image:files.Image? '/uploads/${files.image.name}':null,
}
task.push(newTask);
writeTasksTofile(task);
if(files.Image){
    copyfileSync(files.Image.path,path.join(__dirname, '../uploads/',files.Image.name))
    res.end(JSON.stringify(newTask))
}


})


}
exports.updateTask = (req,res)=>{
    res.JSON.stringify({
        message: 'not implemented'
    })
}
exports.deleteTask=(res,req)=>{
res.JSON.stringify({
    message: 'note implemned for delete'
})
}
