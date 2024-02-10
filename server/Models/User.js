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
        default:"https://res.cloudinary.com/dlc5erxkj/image/upload/v1707566073/signed_upload_demo_form/nstje7fg2bbvz9nf7p7l.png"
    }
})

const User = mongoose.model("User",UserSchema);
export default User;