import axios from "axios";
import express from 'express';
import Project from '../Models/Project.js';
import userMiddleware from "../modules/middleware/user.auth.js";
import { createProject, deleteProject, getProject, putProject } from "../modules/project/project.controller.js";
const projectRouter = express.Router();


projectRouter.post('/postProject', userMiddleware, createProject);
projectRouter.get("/getProject", getProject);
projectRouter.put("/updateProject/:id", userMiddleware, putProject);
projectRouter.delete("/deleteProject/:id", userMiddleware, deleteProject);

export default projectRouter;
