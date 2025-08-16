// import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';

export async function createQuiz(quiz) {
  const update = {_id: uuidv4(), ...quiz};
  return model.replaceOne(
    {_id: update._id}, update, 
    { upsert: true }
  );
}

export async function findQuizzes(courseId) {
  return model.find({ 'details.course': courseId });
}

export async function findQuiz(quizId) {
  const doc = model.findOne({ _id: quizId });
  return doc;
}

export async function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}

export async function updateQuiz(quizId, updates) {
  return model.updateOne(
    { _id: quizId }, 
    { $set: updates });;
}
