import GroupChat from '../../Models/Group-chat.js';
import Group from '../../Models/Groups.js';


export const createGroup = async (req,res) =>{
    try {
        const { name, description, members, tags } = req.body;
        
        const newGroup = new Group({
          name,
          description,
          members,
          tags
        });
        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create group' });
    }
}

export const createChat = async (req, res) => {
  try {
    const { groupId, chats } = req.body;

    let groupChat = await GroupChat.findOne({ groupId });

    if (!groupChat) { 
      groupChat = new GroupChat({ groupId, chats });
    } else {
      groupChat.chats.push(...chats);
    }

    await groupChat.save();

    res.status(200).json({ message: "Chat added successfully" });
  } catch (error) {
    console.log('Error in group controller', error);
    res.status(500).json({ message: 'Internal Server Error' }); 
  }
};

export const getGroupChat = async (req, res) => {
  try {
    const groupId = req.params.id;
    const groupChat = await GroupChat.find({ groupId: groupId });
    res.status(200).json({ groupChat });
  } catch (error) {
    console.log('There is an error in group controller', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};

export const getAllGroups = async (req,res) => {
    try{
        const groups = await Group.find();
        res.status(200).json({groups});
    }catch(error){
        console.log("Error in group controller",error);
        res.send(500).json({message: 'Internal Server Error'})
    }
}

export const getGroupById = async (req,res) => {
    try {
        const groupId = req.params.groupId;
        const group = await Group.findById(groupId);
        if (!group) {
          return res.status(404).json({ error: 'Group not found' });
        }
        res.status(200).json(group);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch group' });
    }
}

export const updateGroupById = async (req,res) => {
    try {
        const groupId = req.params.groupId;
        const { name, description, members, tags } = req.body;
        const updatedGroup = await Group.findByIdAndUpdate(groupId, {
          name,
          description,
          members,
          tags
        }, { new: true });
        res.status(200).json(updatedGroup);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update group' });
    }
}

export const deleteGroupById = async (req,res) => {
    try {
        const groupId = req.params.groupId;
        await Group.findByIdAndDelete(groupId);
        res.status(204).json({ message:" Group has been deleted succesfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete group' });
    }
}