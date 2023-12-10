/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


// Function that returns a promise resolving after 1 second
function waitOneSecond() {
    return new Promise(resolve => {
      // Set timeout to resolve the promise after 1 second (1000 milliseconds)
      setTimeout(() => {
        resolve('Resolved after 1 second');
      }, 1000);
    });
  }
  
  // Function that returns a promise resolving after 2 seconds
  function waitTwoSeconds() {
    return new Promise(resolve => {
      // Set timeout to resolve the promise after 2 seconds (2000 milliseconds)
      setTimeout(() => {
        resolve('Resolved after 2 seconds');
      }, 2000);
    });
  }
  
  // Function that returns a promise resolving after 3 seconds
  function waitThreeSeconds() {
    return new Promise(resolve => {
      // Set timeout to resolve the promise after 3 seconds (3000 milliseconds)
      setTimeout(() => {
        resolve('Resolved after 3 seconds');
      }, 3000);
    });
  }
  
  // Function that waits for all three promises to resolve and calculates the time taken
  function calculateTime() {
    // Record the start time using Date.now()
    const startTime = Date.now();
    console.log("Execuation will start.")
  
    // Using Promise.all to wait for all three promises to resolve
    Promise.all([
      waitOneSecond(),
      waitTwoSeconds(),
      waitThreeSeconds()
    ]).then(() => {
      // Calculate the elapsed time after all promises have resolved
      const endTime = Date.now();
      const elapsedTime = (endTime - startTime) / 1000;
  
      // Log the elapsed time to the console
      console.log(`All promises resolved in ${elapsedTime} seconds`);
    });
  }
  
  // Call calculateTime function to initiate the waiting and calculate time
  calculateTime();
  