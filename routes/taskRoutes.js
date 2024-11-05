const { createTask, gotTask, updateTask, deleteTask, getTasks } = require("../controllers/taskcontroller");

const taskRoutes = (req, res) => {
    if (req.method === 'GET') {
        getTasks(req, res);
    } else if (req.method === 'POST') {
        createTask(req, res);
    } else if (req.method === 'PATCH') {
        updateTask(req, res);
    } else if (req.method === 'DELETE') {
        deleteTask(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Unknown method request.'
        }));
    }
};

module.exports = taskRoutes;
