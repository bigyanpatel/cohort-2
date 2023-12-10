/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// Function that returns a promise resolving after a specified number of seconds
function wait(n) {
    return new Promise((resolve, reject) => {
        // Using setTimeout to simulate a delay of 'n' seconds
        setTimeout(() => {
            // After 'n' seconds, resolve the promise with a message
            resolve(`Resolved after ${n} seconds`);
        }, n * 1000); // 'n' seconds converted to milliseconds (1 second = 1000 milliseconds)
    });
}

// Invoking the wait function with a delay of 3 seconds
wait(3)
    .then((message) => {
        // When the promise is resolved, log the resolved message to the console
        console.log("Resolved: ", message); // This will print "Resolved after 3 seconds" after waiting for 3 seconds
    })
    .catch((error) => {
        // In case of an error, log the error to the console
        console.error("Rejected: ", error);
    });
