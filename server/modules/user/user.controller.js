import { getUserFromToken, getBranch } from "./user.util.js";
import User from "../../Models/User.js";

export const userData = async (req, res) => {
    try {
        const token = req.cookies.token;
      //  console.log(token);
        const user = await getUserFromToken(token);
            
        const rollNumber = user.rollNumber;
        const reqUser = await User.find({ rollNumber: rollNumber });

        res.status(200).json({ user: reqUser }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal Server error' });
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log(userId);
        const user = await User.findById(userId);

        const updatedUserData = req.body;

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = updatedUserData.name || user.name;
        user.email = updatedUserData.email || user.email; 
        user.branch = updatedUserData.branch || user.branch;
        user.description = updatedUserData.description || user.description;
        user.shortDescription = updatedUserData.shortDescription || user.shortDescription;
      
        const updatedUser = await user.save();

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

