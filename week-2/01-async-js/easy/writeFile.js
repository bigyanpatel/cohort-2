const fs = require('fs');

// Content to be written to the file
const contentToWrite = 'This is the updated content to be written to the file.';

// Function to write content to a file
function writeToFile(filename, content) {
  fs.writeFile(filename, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('Content has been written to the file successfully.');

    // After writing the content, read the updated file content
    readUpdatedFileContent(filename);
  });
}

// Function to read the updated file content
function readUpdatedFileContent(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the updated file:', err);
      return;
    }

    // Print the updated contents of the file to the console
    console.log('Updated File Content:');
    console.log(data);
  });
}

// Replace 'file.txt' with the path to your file
writeToFile('../medium/input.txt', contentToWrite);
