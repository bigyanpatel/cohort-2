/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// Function using Promise to create a delay without blocking the thread
function sleep(milliseconds) {
    return new Promise(resolve => {
        // setTimeout triggers the resolve function after the specified milliseconds
        setTimeout(resolve, milliseconds);
    });
}

// Example usage of sleep function with comments
console.log("Start");

// Initiating sleep for 3 seconds (3000 milliseconds)
sleep(3000)
    .then(() => {
        // This code block executes after the 3-second delay
        console.log("End");
    });

// Alternative function to simulate a blocking sleep using a while loop
function blockingSleep(milliseconds) {
    const start = Date.now();
    // Loop continuously checks the time until the specified milliseconds have passed
    while (Date.now() - start < milliseconds) { }
}

// Example usage of blocking sleep function with comments
console.log("Blocking Start");

// Initiating blocking sleep for 3 seconds
blockingSleep(3000);

// This code will execute after the blocking sleep is completed
console.log("Blocking End");

module.exports = sleep;
