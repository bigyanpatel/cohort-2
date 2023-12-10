// Function to update and display the counter
function updateCounter(counter) {
  // Display the current counter value
  console.log(`Counter: ${counter}`);

  // Increment the counter and schedule the next update after 1 second
  setTimeout(() => {
    updateCounter(counter + 1); // Call updateCounter recursively after 1 second
  }, 1000); // 1000 milliseconds = 1 second
}

// Start the counter from 1
updateCounter(1);

module.exports = { updateCounter }
