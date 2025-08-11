// import Database from "../Database/index.js";
import model from "./model.js";

export async function createAssignment(assignment) {
  const N = await model.countDocuments({}) + 100;
  return model.create({ ...assignment, _id: `A${N}`});
}

export function findAssignments(courseId) {
  // const { assignments } = Database;
  // return assignments.filter((assignment) => assignment.course === courseId);
  return model.find({ course: courseId });
}

export function findAssignment(assignmentId) {
  return model.findOne({ _id: assignmentId });
}

export function deleteAssignment(courseId, assignmentId) {
  // const { assignments } = Database;
  // Database.assignments = assignments.filter(
  //   (assignment) => 
  //     !( assignment._id === assignmentId &&
  //        assignment.course === courseId )
  // );
  return model.deleteOne({ _id: assignmentId, course: courseId });
}

export function updateAssignment(courseId, assignmentId, updates) {
  // const { assignments } = Database;
  // const assignment = assignments.find(
  //   (assignment) => 
  //     ( assignment._id === assignmentId &&
  //       assignment.course === courseId )
  // );
  // Object.assign(assignment, updates);
  console.log(updates);
  return model.updateOne(
    { _id: assignmentId, course: courseId }, 
    { $set: updates });;
}
