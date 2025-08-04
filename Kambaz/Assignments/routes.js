import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

  app.get("/api/assignments/:courseId", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignments(courseId);
    res.send(assignments);
  });

  app.delete("/api/assignments/:courseId/course/:assignmentId/assignment", (req, res) => {
    const { courseId, assignmentId } = req.params;
    const status = dao.deleteAssignment(courseId, assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:courseId/course/:assignmentId/assignment", (req, res) => {
    const { courseId, assignmentId } = req.params;
    const updates = req.body;
    const status = dao.updateAssignment(courseId, assignmentId, updates);
    res.send(status);
  });

  app.post("/api/assignments", (req, res) => {
    const assignment = dao.createAssignment(req.body);
    res.send(assignment);
  }); 
}
