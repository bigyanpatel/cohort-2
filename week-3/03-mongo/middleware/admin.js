const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const { username, password } = req.headers;
  
    try {
      if (!username || !password) {
        return res.status(401).json({ message: 'Unauthorized - Missing credentials' });
      }
  
      const admin = await Admin.findOne({ username, password });
  
      if (!admin) {
        return res.status(401).json({ message: 'Unauthorized - Invalid credentials' });
      }
  
      // Attach the admin object to the request for further processing if needed
      req.admin = admin;
      next(); // Move to the next middleware or route handler
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = adminMiddleware;