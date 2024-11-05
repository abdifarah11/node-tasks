const { IncomingForm } = require("formidable");
const { readTasksFromFile, writeTasksToFile } = require("../utils/filehandling");
const { copyFileSync } = require('fs');
const path = require("path");

// Function to get all tasks
exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
};

// Function to create a new task
exports.createTask = (req, res) => {
    const form = new IncomingForm();

    form.parse(req, (error, fields, files) => {
        if (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error parsing form data' }));
            return;
        }

        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields.description || '',
            status: fields.status || 'pending',
            image: files.image ? `/uploads/${files.image.name}` : null,
        };

        tasks.push(newTask);
        writeTasksToFile(tasks);

        if (files.image) {
            copyFileSync(files.image.filepath, path.join(__dirname, '../uploads/', files.image.name));
        }

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTask));
    });
};

// Function to update a task
exports.updateTask = (req, res) => {
    res.writeHead(501, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not implemented' }));
};

// Function to delete a task
exports.deleteTask = (req, res) => {
    res.writeHead(501, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not implemented for delete' }));
};
