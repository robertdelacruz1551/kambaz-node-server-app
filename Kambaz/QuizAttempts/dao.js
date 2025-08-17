// import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';

export async function createAttempt(quiz) {
  return model.create(quiz);
}

export async function findAttempts(courseId) {
  return model.find({ 'details.course': courseId });
}

export async function findAttempt(attemptId) {
  return model.findOne({ _id: attemptId });
}

export async function deleteAttempt(attemptId) {
  return model.deleteOne({ _id: attemptId });
}

export async function updateAttempt(attemptId, updates) {
  return model.updateOne(
    { _id: attemptId }, 
    { $set: updates }
  );
}
