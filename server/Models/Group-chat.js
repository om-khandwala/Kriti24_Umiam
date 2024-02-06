import mongoose from "mongoose";

const { Schema } = mongoose;

const groupChatSchema = new Schema({
    groupId: {
        type: String,
        required: true 
    },
    chats: [
        {
            userName: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now 
            }
        }
    ]
});

const GroupChat = mongoose.model("GroupChat", groupChatSchema);

export default GroupChat;


