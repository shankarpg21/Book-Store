const asynchandler=require('express-async-handler');
const Users=require('../models/userModel');
const Books=require('../models/bookModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const Orders = require('../models/orderModel');

const login=asynchandler(async(req,res)=>{
    const {userName,password}=req.body;
    if(!userName||!password){
        return res.status(400).send("All fields are madatory");
    }
    const user=await Users.findOne({"userName":userName});
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=jwt.sign({
            user:user.userName,
            _id:user._id
        },process.env.ACCESS_TOKEN_USER,{expiresIn:"25m"})
        return res.status(200).json(accessToken)
    }
    else{
        return res.status(401).send("Invalid credentials");
    }
})

const register=asynchandler(async(req,res)=>{
    const {userName,password}=req.body;
    if(!userName||!password){
        return res.status(400).send("All fields are madatory");
    }
    const hashedpw=await bcrypt.hash(password,10);
    const chk=await Users.findOne({"userName":userName});
    if(chk){
        return res.status(400).send("UserName already exists");
    }
    await Users.create({"userName":userName,"password":hashedpw});
    res.status(200).send("Registration successful");
})

const getBook=asynchandler(async(req,res)=>{
    const msg=await Books.find({$and:[{availability:{$gte:1}}]});
    if(!msg){
        return res.status(400).send("Sorry No Books available");
    }
    res.status(200).json(msg);

})

const buyBook=asynchandler(async(req,res)=>{
    const bookId=req.params.bookId;
    const chk=await Books.findOne({"book_id":bookId});
    if(!chk){
        return res.status(400).send("No Book exists on that id");
    }
    const r=await Books.updateOne({"book_id":bookId.charAt(1)},{$inc:{"availability":-1}});
    const {user_id}=req.body;
    await Orders.create({"userName":user_id,"book_id":chk.book_id,"bookName":chk.name,"price":chk.price});
    return res.status(200).send("Book purchased succesfully");
})

const orders=asynchandler(async(req,res)=>{
    const userId=req.params.userId;
    const chk=await Orders.find({"userName":userId});
    res.status(200).json(chk);
    
})

module.exports={login,register,getBook,buyBook,orders};