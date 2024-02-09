import User from "../../Models/User.js";
import { getUserFromToken } from "./user.util.js";

export const userData = async (req, res) => {
  try {
    const token = req.cookies.token;
    const user = await getUserFromToken(token);
    
    const rollNumber = user.rollNumber;
    const reqUser = await User.find({ rollNumber: rollNumber });

    res.status(200).json({ user: reqUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server error" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ users: allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server error" });
  }
};

export const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const updatedUserData = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      res.status(200).json({ user: updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal Server error" });
    }
};
export const getUserById = async(req,res) =>{
  try {
    const {userId} = req.params;
    const user = await User.findById(userId);
    return res.status(200).json({user})
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'internal server error'})
  }
}