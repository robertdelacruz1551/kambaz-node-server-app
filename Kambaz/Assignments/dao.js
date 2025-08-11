// import Database from "../Database/index.js";
import model from "./model.js";

export async function createAssignment(assignment) {
  const N = await model.countDocuments({}) + 100;
  return model.create({ ...assignment, _id: `A${N}`});
}

export function findAssignments(courseId) {
  return model.find({ course: courseId });
}

export function findAssignment(assignmentId) {
  return model.findOne({ _id: assignmentId });
}

export function deleteAssignment(courseId, assignmentId) {
  return model.deleteOne({ _id: assignmentId, course: courseId });
}

export function updateAssignment(courseId, assignmentId, updates) {
  return model.updateOne(
    { _id: assignmentId, course: courseId }, 
    { $set: updates });;
}
