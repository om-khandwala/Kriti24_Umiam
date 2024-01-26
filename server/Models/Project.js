const mongoose = require("mongoose");
const schema = mongoose.Schema;


const Project = new schema({
    projectname:{
        type: String
    },
    Description:{
        type: string,
    },
    Rating:{
        type:Number,
    },
    NumberofRatings:{
        type:Number
    },
    Comments:[
        {
            username:{
                type:string
            },
            comment:{
                type:string
            },
            stars:{
                type:number
            }
        }
    ],
    Author:{
        type:schema.Types.ObjectId
    },
    Collabrators:[{
        type:schema.Types.ObjectId
    }],
})

module.exports = mongoose.model("User",User);