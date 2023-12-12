/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


// Function that returns a promise resolving after 1 second
function waitOneSecond(t) {
  return new Promise(resolve => {
    // Set timeout to resolve the promise after 1 second (1000 milliseconds)
    setTimeout(() => {
      resolve('Resolved after 1 second');
    }, t * 1000);
  });
}

// Function that returns a promise resolving after 2 seconds
function waitTwoSeconds(t) {
  return new Promise(resolve => {
    // Set timeout to resolve the promise after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      resolve('Resolved after 2 seconds');
    }, t * 1000);
  });
}

// Function that returns a promise resolving after 3 seconds
function waitThreeSeconds(t) {
  return new Promise(resolve => {
    // Set timeout to resolve the promise after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      resolve('Resolved after 3 seconds');
    }, t * 1000);
  });
}

// Function that waits for all three promises to resolve and calculates the time taken
async function calculateTime(t1, t2, t3) {
  // Record the start time using Date.now()
  const startTime = Date.now();
  // Using Promise.all to wait for all three promises to resolve
  return Promise.all([
    waitOneSecond(t1),
    waitTwoSeconds(t2),
    waitThreeSeconds(t3)
  ]).then(() => {
    // Calculate the elapsed time after all promises have resolved
    const endTime = Date.now();
    const elapsedTime = (endTime - startTime);

    return elapsedTime;
  });
}

// Call calculateTime function to initiate the waiting and calculate time
calculateTime();

module.exports = calculateTime;
