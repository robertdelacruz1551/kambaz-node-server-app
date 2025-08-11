import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    points: Number,
    due: String,
    course: { type: String, ref: "CourseModel" },
    group: String,
    submission: String,
    available: {
      from: String,
      to: String,
    }
  },
  { collection: "assignments" }
);

export default assignmentSchema;