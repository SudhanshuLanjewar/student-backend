const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    studentId: { 
      type: String, 
      required: [true, 'Student ID is required'], 
      unique: true, 
      trim: true, 
      uppercase: true 
    },
    name: { 
      type: String, 
      required: [true, 'Name is required'], 
      trim: true 
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true, 
      trim: true, 
      lowercase: true 
    },
    department: { 
      type: String, 
      required: [true, 'Department is required'], 
      trim: true 
    },
    semester: { 
      type: Number, 
      required: [true, 'Semester is required'], 
      min: 1, 
      max: 8 
    },
    contact: { 
      type: String, 
      trim: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);