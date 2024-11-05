const { task, json } = require('fp-ts');
const fs = require('fs');
const path = require('path');
const filepath = './data/tasks.json';
exports.writeTasksTofile = (task)=>{
   fs.writeFileSync(filepath,json.stringify(task))
   const readtasksfromfile=()=>{
    if(!fs.existsSync(filepath))
{
 exports.writeTasksTofile([])
}
const data = fs.readFileSync (filepath)
return json.parse(data)
} 
}