import axios from "axios";
import express from 'express';
import Project from '../Models/Project.js';
import userMiddleware from "../modules/middleware/user.auth.js";
import { allProject, createProject, deleteProject, getProject, putProject, recentProject } from "../modules/project/project.controller.js";
const projectRouter = express.Router();


projectRouter.post('/create', createProject);
projectRouter.get('/',allProject);
projectRouter.get('/recent',recentProject);
projectRouter.get("/getProject", getProject);
projectRouter.put("/updateProject/:id", userMiddleware, putProject);
projectRouter.delete("/deleteProject/:id", userMiddleware, deleteProject);

export default projectRouter;
