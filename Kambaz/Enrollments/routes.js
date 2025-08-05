import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

  app.get("/api/enrollments/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = dao.findMyEnrollment(userId);
    res.send(enrollments);
  });

  app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.unenrollUserInCourse(userId, courseId);
    res.send(status);
  });

  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId }= req.body
    const assignment = dao.enrollUserInCourse(userId, courseId);
    res.send(assignment);
  }); 
}