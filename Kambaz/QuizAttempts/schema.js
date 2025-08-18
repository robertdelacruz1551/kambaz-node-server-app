import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    _id: String,
    quizId: String,
    userId: String,
    published: { type: Boolean, default: false },
    final:  { type: Boolean, default: false },
    created: { type: String, default: Date().toString() },
    updated: String,
    score: Number,
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
      due: String, 
      available: {
        from: String, 
        to: String,
      }
    },
    questions: [{}]
  },
  { collection: "attempts" }
);

export default attemptSchema;
