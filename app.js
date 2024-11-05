const { task, JSON } = require('fp-ts');
const http = require('http');

const taskRoutes = require('./routes/taskRoutes');

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')) {
        taskRoutes(req, res);
    } else {
        res.writeHead(404, 'Not Found', { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Sorry, page not found'
        }));
    }
});

server.listen(port, host, () => {
    console.log(`Server is running on port ${port}`);
});
