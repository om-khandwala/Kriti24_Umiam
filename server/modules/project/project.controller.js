import Project from "../../Models/Project.js";
import User from "../../Models/User.js";

export const createProject =  async (req, res) => {
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
}

export const getProject = async (req, res) => {
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

}

export const putProject = async (req, res) => {
    const projectId = req.params.id;
    const parsedProject = req.body;

    await Project.updateOne({ _id: projectId },
        parsedProject
    );

    res.json({
        msg: "Updated successfully"
    });
}

export const deleteProject = async (req, res) => {
    const projectId = req.params.id;

    await Project.deleteOne({_id: projectId});

    res.json({
        msg: "Deleted successfully"
    });
}