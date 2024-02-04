import mongoose from "mongoose";
const schema = mongoose.Schema;


const projectSchema = new schema({
    projectName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },

    outcomes: {
        type: String,
    },
    tags:{
        type: [String],
        required: true
    },
    logo:{
        type: String,
    },
    links:{
            image:{
                type: [String],
                default: []
            },
            documents:{
                type: String,
                default: ""
            },
            videos:{
                type: [String],
                default: []
            },
    },
    repository:{
        type: String,
        required: true
    },
    rating:{
        type:Number,
        default: 0
    },
    numberofRatings:{
        type:Number,
        default: 0
    },
    comments:[
        {
            username:{
                type:String
            },
            comment:{
                type:String
            },
            likes:{
                type:Number,
                default: 0
            }
        }
    ],
    author:{
        type:schema.Types.ObjectId
    },
    collaborators:[{
        type:schema.Types.ObjectId
    }],
})

const Project = mongoose.model("Project",projectSchema);

export default Project;