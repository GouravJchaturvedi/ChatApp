import jwt, { decode } from "jsonwebtoken"
import User from "../models/user.model.js";

const protectRoute = async (req , res , next) =>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error : "Unauthorized - No Token provided"});
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRETKEY);

        if(!decoded){
            return res.status(401).json({error : "Unauthorized - Invalid Token provided"});
        }
        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({error : "User not found"});   
        }

        req.user = user;
        next();
    }catch(err){
        console.log("Error in protectRoute middleware" , err.message);
        res.status(500).json({error : "Internal Server Error"});
    }
}

export default protectRoute;