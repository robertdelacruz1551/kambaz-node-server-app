import mongoose from "mongoose";

const quizzesSchema = new mongoose.Schema(
  {
    _id: String,
    published: { type: Boolean, default: false },
    details: {
      title: String, 
      course: { type: String, ref: "CourseModel" }, 
      description: String, 
      typ: String,
      points: Number,
      group: String,
      shuffle: Boolean,
      timeLimit: Number,
      multiattempts: Boolean,
      show: String,
      code: String,
      oneQuestion: Boolean,
      webcam: Boolean,
      lock: Boolean,
      due: Date, 
      available: {
        from: Date, 
        to: Date,
      }
    },
    questions: [{}]
  },
  { collection: "quizzes" }
);

export default quizzesSchema;
