import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

  app.get("/api/assignments/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignments(courseId);
    res.send(assignments);
  });

  app.get("/api/assignment/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await dao.findAssignment(assignmentId);
    res.send(assignment);
  });

  app.delete("/api/assignments/:courseId/course/:assignmentId/assignment", async (req, res) => {
    const { courseId, assignmentId } = req.params;
    const status = await dao.deleteAssignment(courseId, assignmentId);
    res.send(status);
  });

  app.put("/api/assignments/:courseId/course/:assignmentId/assignment", async (req, res) => {
    const { courseId, assignmentId } = req.params;
    const updates = req.body;
    const status = await dao.updateAssignment(courseId, assignmentId, updates);
    res.send(status);
  });

  app.post("/api/assignments", async (req, res) => {
    const assignment = await dao.createAssignment(req.body);
    res.send(assignment);
  }); 
}
