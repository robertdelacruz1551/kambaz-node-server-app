import * as dao from "./dao.js";

export default function QuizzesRoutes(app) {

  app.get("/api/quizzes/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzes(courseId);
    res.send(quizzes);
  });

  app.get("/api/quiz/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuiz(quizId);
    res.send(quiz);
  });

  app.delete("/api/quiz/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.send(status);
  });

  app.put("/api/quiz/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const updates = req.body;
    const status = await dao.updateQuiz(quizId, updates);
    res.send(status);
  });

  app.post("/api/quiz/:quizId", async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.send(quiz);
  }); 

  app.post("/api/quiz/:quizId/submit", async (req, res) => {
    const quiz = await dao.submitGradedQuiz(req.body);
    res.send(quiz);
  }); 
}
