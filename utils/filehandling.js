const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'data', 'tasks.JSON'); // Ensure the path is correctly set

// Function to write tasks to a file
const writeTasksToFile = (tasks) => {
    try {
        fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2)); // Pretty-print JSON with 2 spaces
    } catch (error) {
        console.error('Error writing to file:', error);
    }
};

// Function to read tasks from a file
const readTasksFromFile = () => {
    if (!fs.existsSync(filepath)) {
        // Initialize the file with an empty array if it doesn't exist
        writeTasksToFile([]);
    }

    try {
        const data = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading from file:', error);
        return []; // Return an empty array on error
    }
};

// Export the functions
exports.writeTasksToFile = writeTasksToFile;
exports.readTasksFromFile = readTasksFromFile;
