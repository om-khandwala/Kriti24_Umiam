import axios from "axios";
import express from "express";
import Project from "../Models/Project.js";
import userMiddleware from "../modules/middleware/user.auth.js";
import {
  allProject,
  createProject,
  deleteProject,
  getProject,
  putProject,
  recentProject,
  userProjects,
} from "../modules/project/project.controller.js";
const projectRouter = express.Router();

projectRouter.post("/create", createProject);
projectRouter.get("/", allProject);
projectRouter.get("/recent", recentProject);
projectRouter.get("/user/:id", userProjects);
projectRouter.get("/getProject", getProject);
projectRouter.put("/updateProject/:id", putProject);
projectRouter.delete("/deleteProject/:id", deleteProject);

export default projectRouter;
