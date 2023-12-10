const fs = require('fs');

// Function to read the contents of a file
function readFileContent(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Print the contents of the file to the console
    console.log('File Content:');
    console.log(data);

    // Simulate an expensive operation
    performExpensiveOperation();
  });
}

// Function to simulate an expensive operation (you can make it increasingly more expensive)
function performExpensiveOperation() {
  // Simulate an expensive operation - for example, a loop that takes time to complete
  for (let i = 0; i < 100000000; i++) {
    // This loop performs a large number of iterations
    // Increasing the loop count will make it more time-consuming
  }

  // After the loop completes, log a message indicating the end of the expensive operation
  console.log('Expensive operation completed.');
}

// Replace 'file.txt' with the path to your file
readFileContent('../medium/input.txt');
