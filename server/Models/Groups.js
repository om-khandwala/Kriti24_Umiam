import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: String,

  tags: {
    type: [String],
    default: []
  },
  
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Group = mongoose.model('Group', groupSchema);
export default Group;
