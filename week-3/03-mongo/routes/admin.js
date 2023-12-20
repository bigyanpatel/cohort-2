const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if an admin with the same username already exists
        const existingAdmin = await Admin.findOne({ username });

        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        return res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        const { title, description, price, imageLink } = req.body;

        const newCourse = new Course({ title, description, price, imageLink, published: true });
        await newCourse.save();
        return res.status(201).json({ message: 'Course created successfully', courseId: newCourse._id });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const courses = await Course.find();
        return res.status(200).json({ courses });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;