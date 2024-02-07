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
    }
})

const User = mongoose.model("User",UserSchema);
export default User;