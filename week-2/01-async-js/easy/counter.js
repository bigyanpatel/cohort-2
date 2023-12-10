// Initialize counter
let counter = 0;

// Function to update and display the counter
function updateCounter() {
  // Increment the counter
  counter++;

  // Display the current counter value
  console.log(`Counter: ${counter}`);
}

// Update the counter every second using setInterval
setInterval(updateCounter, 1000); // 1000 milliseconds = 1 second