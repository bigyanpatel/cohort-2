const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({ published: true });
        return res.status(200).json({ courses });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
      const { courseId } = req.params;
  
      const course = await Course.findById(courseId);
  
      if (!course || !course.published) {
        return res.status(404).json({ message: 'Course not found or unavailable' });
      }
  
      const user = req.user; // Assuming user is available in req through middleware
  
      if (!user.courses.includes(courseId)) {
        // If the course is not already purchased, add it to the user's purchased courses
        user.courses.push(courseId);
        await user.save();
        return res.status(200).json({ message: 'Course purchased successfully' });
      } else {
        return res.status(400).json({ message: 'Course already purchased' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
      const user = req.user; // Assuming user is available in req through middleware
  
      // Fetch courses purchased by the user based on the user's stored course IDs
      const purchasedCourses = await Course.find({ _id: { $in: user.courses } });
  
      return res.status(200).json({ purchasedCourses });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;
