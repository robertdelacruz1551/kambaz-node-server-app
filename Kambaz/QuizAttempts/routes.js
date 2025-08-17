import * as dao from "./dao.js";

export default function QuizAttemptRoutes(app) {
  app.post("/api/quiz/:quizId/attempt", async (req, res) => {
    const quiz = await dao.createAttempt(req.body);
    res.send(quiz);
  }); 

  app.get("/api/quiz/:quizId/user/:userId/attempts", async (req, res) => {
    const { quizId, userId } = req.params;
    const quizzes = await dao.findAttempts(quizId, userId);
    res.send(quizzes);
  });

  app.get("/api/quiz/:quizId/attempt/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    const quiz = await dao.findAttempt(attemptId);
    res.send(quiz);
  });

  app.put("/api/quiz/:quizId/attempt/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    const updates = req.body;
    const status = await dao.updateAttempt(attemptId, updates);
    res.send(status);
  });
}