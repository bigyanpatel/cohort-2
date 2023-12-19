const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

// Middleware to rate limit requests
const rateLimitMiddleware = (req, res, next) => {
  const userId = req.headers['user-id'];

  // If user ID exists, check the number of requests made in the last second
  if (userId) {
    const currentTime = Date.now();
    if (!numberOfRequestsForUser[userId]) {
      numberOfRequestsForUser[userId] = [currentTime];
    } else {
      numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId].filter(
        (timestamp) => timestamp > currentTime - 1000
      );
      numberOfRequestsForUser[userId].push(currentTime);
    }

    // If the number of requests exceeds 5 in the last second, block the request
    if (numberOfRequestsForUser[userId].length > 5) {
      return res.status(404).json({ error: 'Too Many Requests' });
    }
  }

  next();
};

// Clear the request count for each user every second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

// Apply the rate limiting middleware globally
app.use(rateLimitMiddleware);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;