/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  
  // Function that sequentially calls all three functions and measures the time taken
  function calculateTime() {
    // Record the start time using Date.now()
    const startTime = Date.now();
  
    // Sequentially call the functions and wait for each promise to resolve in order
    waitOneSecond()
      .then(result => {
        // Log the result and chain the next function call
        console.log(result);
        return waitTwoSeconds();
      })
      .then(result => {
        // Log the result and chain the next function call
        console.log(result);
        return waitThreeSeconds();
      })
      .then(result => {
        // Log the result and calculate total time taken after all promises resolve
        console.log(result);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(`Entire operation took ${elapsedTime} milliseconds`);
      });
  }
  
  // Call calculateTime function to sequentially execute promises and calculate time
  calculateTime();  