import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function createAssignment(assignment) {
  Database.assignments = [...Database.assignments, assignment];
  return assignment;
}

export function findAssignments(courseId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function deleteAssignment(courseId, assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => 
      !( assignment._id === assignmentId &&
         assignment.course === courseId )
  );
}

export function updateAssignment(courseId, assignmentId, updates) {
  const { assignments } = Database;
  const assignment = assignments.find(
    (assignment) => 
      ( assignment._id === assignmentId &&
        assignment.course === courseId )
  );
  Object.assign(assignment, updates);
  return assignment;
}
