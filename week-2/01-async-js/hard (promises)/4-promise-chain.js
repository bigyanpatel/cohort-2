/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// Function that returns a promise resolving after 1 second
function waitOneSecond(t1) {
  return new Promise(resolve => {
    // Set timeout to resolve the promise after 1 second (1000 milliseconds)
    setTimeout(() => {
      resolve('Resolved after 1 second');
    }, t1 * 1000);
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

// Function that sequentially calls all three functions and measures the time taken
async function calculateTime(t1, t2, t3) {
  // Record the start time using Date.now()
  const startTime = Date.now();

  return waitOneSecond(t1).then(() => waitTwoSeconds(t2)).then(() => waitThreeSeconds(t3)).then(() => {
    const endTime = Date.now();

    const elapsedTime = endTime - startTime;

    return elapsedTime;
  });
}

// Call calculateTime function to sequentially execute promises and calculate time
calculateTime();

module.exports = calculateTime;