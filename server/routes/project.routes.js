import axios from "axios";
import express from "express";
import Project from "../Models/Project.js";
import userMiddleware from "../modules/middleware/user.auth.js";
import {
  addComment,
  allProject,
  createProject,
  deleteProject,
  getProject,
  getProjectById,
  putProject,
  recentProject,
  userProjects,
} from "../modules/project/project.controller.js";
const projectRouter = express.Router();

projectRouter.post("/create", userMiddleware, createProject);
projectRouter.get("/", allProject);
projectRouter.get("/recent", recentProject);
projectRouter.get("/user/:id", userProjects);
projectRouter.get("/getProject", getProject);
projectRouter.put("/update/:id", putProject);
projectRouter.delete("/deleteProject/:id", deleteProject);
projectRouter.get('/get-project/:id', getProjectById);
projectRouter.post('/addComment/:id', addComment);


export default projectRouter;
