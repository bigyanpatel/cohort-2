const { User } = require("../db");

async function userMiddleware(req, res, next) {
    const { username, password } = req.headers;
  
    try {
      if (!username || !password) {
        return res.status(401).json({ message: 'Unauthorized - Missing credentials' });
      }
  
      const user = await User.findOne({ username, password });
  
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized - Invalid credentials' });
      }
  
      // Attach the user object to the request for further processing if needed
      req.user = user;
      next(); // Move to the next middleware or route handler
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = userMiddleware;