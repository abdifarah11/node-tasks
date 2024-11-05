const fs = require('fs');
const path = require('path');
const filepath = './data/tasks.JSON';

// Function to write tasks to a file
const writeTasksTofile = (tasks) => {
   fs.writeFileSync(filepath, JSON.stringify(tasks));
};

// Function to read tasks from a file
const readTasksFromFile = () => {
   if (!fs.existsSync(filepath)) {
      // Initialize the file with an empty array if it doesn't exist
      writeTasksTofile([]);
   }

   const data = fs.readFileSync(filepath, 'utf-8');
   return JSON.parse(data);
};

// Export the functions
exports.writeTasksTofile = writeTasksTofile;
exports.readTasksFromFile = readTasksFromFile;
