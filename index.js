import express from 'express';
import cors from "cors";
import session from "express-session";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";

import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentsRoutes from "./Kambaz/Enrollments/routes.js";


const app = express();
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  // .then(() => console.log('Mongoose connected to MongoDB Atlas!'))
  // .catch(err => console.error('Mongoose connection error:', err));

app.use(
  cors({
   credentials: true,
   origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());


Lab5(app);
UserRoutes(app);
CourseRoutes(app);
EnrollmentsRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

// app.listen(process.env.PORT || 4000)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
