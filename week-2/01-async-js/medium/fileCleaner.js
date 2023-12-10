const fs = require('fs');

// Function to clean extra spaces from a string
function cleanSpaces(input) {
  // Use regular expression to replace multiple spaces with a single space
  return input.replace(/\s+/g, ' ').trim(); // Replaces multiple spaces with a single space and trims any leading/trailing spaces
}

// Function to read, clean, and write the file
function cleanFile(filename) {
  // Read the content of the file
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Clean the content by removing extra spaces
    const cleanedContent = cleanSpaces(data);

    // Write the cleaned content back to the same file
    fs.writeFile(filename, cleanedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log('File cleaned successfully!');
    });
  });
}

// Replace 'file.txt' with the path to your file
cleanFile('input.txt');
