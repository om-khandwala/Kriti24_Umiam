import { getUserFromToken } from "../user/user.util.js";

const userMiddleware = async function(req, res, next){
    try{
        const token = req.cookies.token;
        const userData = await getUserFromToken(token);
        req.userRollNumber = userData.rollNumber;
        next();
    }catch(err){
        res.status(411).json({msg: "error in middleware"});
    }
}

export default userMiddleware;