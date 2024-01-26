const mongoose = require("mongoose");
const schema = mongoose.Schema;


const User = new schema({
    name:{
        type: String
    },
    roll:{
        type: Number,
        required:true
    },
    ProjectID:[{
        type:schema.Types.ObjectId
    }]
})

module.exports = mongoose.model("User",User);