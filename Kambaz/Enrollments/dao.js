import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function findMyEnrollment(userId) {
  const { enrollments } = Database;
  enrolled = enrollments.find((course) => course.user === userId);
  return enrolled;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrolled = enrollments.some(
    course => ( course.user === userId &&
                course.course === courseId )
  )
  if (!enrolled) {
    Database.enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => 
      !( enrollment.user === userId &&
         enrollment.course === courseId )
  );
}