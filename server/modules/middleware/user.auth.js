import { getUserFromToken } from "../user/user.controller.js";

const userMiddleware = async function(req, res, next){
    try{
        const token = req.cookie("token");
        const userData = await getUserFromToken(token);
        req.userRollNumber = userData.rollNumber;
        next();
    }catch(err){
        res.status(411).json({msg: "Error in middleware"});
    }
}

export default userMiddleware;