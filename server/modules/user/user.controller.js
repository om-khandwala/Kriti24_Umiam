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
    res.status(500).json({ msg: "Internal Server error" });
  }
};

