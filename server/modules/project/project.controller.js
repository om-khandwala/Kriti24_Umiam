import axios from "axios";
import express from 'express';
// import zod from 'zod';
import Project from '../../Models/Project.js';
import userMiddleware from "../middleware/user.auth.js";
import User from "../../Models/User.js";
// const multer = require("multer");

const projectRouter = express.Router();

const projectSchema = zod.object({

})

projectRouter.post('/postProject', userMiddleware, async function(req, res){
    try{
        const parsedProject = req.body;
        const roll = req.userRollNumber;
        const user = await User.findOne({rollNumber: roll});
        const project = await Project.create({
            projectName: parsedProject.projectName,
            description: parsedProject.description,
            repository: parsedProject.repository,
            tags: parsedProject.tags,
            author: user._id,
        })
        res.status(200).json({msg: "Project created!"});
    }
    catch(err){
        res.status(411).json({msg: err});
    }
});

projectRouter.get("/getProject", async function(req, res){
    let filter = req.query.filter || "";
    const projects = await Project.find({
        $or: [{
            projectName: { "$regex": filter, '$options': 'i'}
        },{
            tags: { "$regex": filter, '$options': 'i'}
        },{
            description: { "$regex": filter, '$options': 'i'}
        }
        ]
    })

    res.json({
        projects
    })

});

projectRouter.put("/updateProject/:id", userMiddleware, async function(req, res){
    const projectId = req.params.id;
    const parsedProject = req.body;

    await Project.updateOne({ _id: projectId },
        parsedProject
    );

    res.json({
        msg: "Updated successfully"
    });
});

projectRouter.delete("/deleteProject/:id", userMiddleware, async function(req, res){
    const projectId = req.params.id;

    await Project.deleteOne({_id: projectId});

    res.json({
        msg: "Deleted successfully"
    });
});

export default projectRouter;
