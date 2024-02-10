import mongoose from "mongoose";
const schema = mongoose.Schema;

const UserSchema = new schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    branch:{
        type: String
    },
    degree:{
        type: String
    },
    shortDescription: {
        type: String
    },
    description:{
        type: String
    },
    rollNumber:{
        type: Number,
        required:true
    },
    logo:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8cTn1-RRcQ_T4-cf40vYi4sjFEADIdog1TqwvXO3kw&s"
    }
})

const User = mongoose.model("User",UserSchema);
export default User;