const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://bigyanpatel:Bigyan2023@price-tracker.7uy1ayr.mongodb.net/courses-assignment').then(res => {
    console.log("Mongodb connected Successfully!");
}).catch(err => {
    console.log(err.message);
});

// Define Admin Schema
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Define User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}