const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
    },
    password: {
        type: String,
        min: 4,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    semester: {
        type: String
    }
});

const StudentData = mongoose.model("StudentData", studentSchema);

module.exports = StudentData;
