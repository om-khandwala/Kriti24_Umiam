import Project from "../../Models/Project.js";
import User from "../../Models/User.js";

export const createProject =  async (req, res) => {
    try{
        const parsedProject = req.body;
        const roll = 220122045;
        const user = await User.findOne({rollNumber: roll});
        const project = await Project.create({
            ...parsedProject,
            author: user._id,
        })
        res.status(200).json({msg: "Project created!"});
    }
    catch(err){
        console.log(err);
        res.status(411).json({msg: err});
    }
}

export const allProject = async (req,res) => {
        try{
            const project = await Project.find();
            res.status(200).json({project});
        }catch(error){
            console.log(error,"Error is project controller");
            res.status(500).json({})
        }
}

export const recentProject = async (req, res) => {
    try {
        const twentyFourHoursAgo = new Date();
        twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);

        const projects = await Project.find({
            createdAt: { $gte: twentyFourHoursAgo }
        });

        res.status(200).json(projects);
    } catch (error) {
        console.log('Error in project controller', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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