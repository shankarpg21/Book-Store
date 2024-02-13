const asyncHandler=require("express-async-handler")
const jwt=require('jsonwebtoken')

const validateToken=asyncHandler(async(req,res,next)=>{ 
    let token;
    let authHeader=req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.ACCESS_TOKEN_USER,(err,decoded)=>{
            if(err){
                return res.status(401).send("User is not Authorized or token is expired");
            }
            req.user=decoded.user;
            next();
        })
        if(!token){
            res.status(401).send("User is not authorized")
        }
    }
    else{
        res.status(401).send("Token is necessary");
    }
})

module.exports=validateToken