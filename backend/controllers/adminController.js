const asynchandler=require('express-async-handler');
const Admins=require('../models/adminModel');
const Books=require('../models/bookModel');
const jwt=require('jsonwebtoken')

const login=asynchandler(async(req,res)=>{
    const {userName,password}=req.body;
    if(!userName||!password){
        return res.status(400).send("All fields are madatory");
    }
    const admin=await Admins.findOne({"userName":userName});
    if(admin && (password===admin.password)){
        const accessToken=jwt.sign({
            admin:admin.userName,
            _id:admin._id
        },process.env.ACCESS_TOKEN_ADMIN,{expiresIn:"25m"})
        return res.status(200).json(accessToken)
    }
    else{
        return res.status(401).send("Invalid credentials");
    }
})

const addBook=asynchandler(async(req,res)=>{
    const {book_id,name,genre,availability,price}=req.body;
    if(!book_id||!name||!availability){
        return res.status(400).send("All fields are mandatory");
    }
    const book=await Books.findOne({"book_id":book_id})
    const chk=await Books.findOne({"name":name});
    if(book){
        return res.status(400).send("Book id already exists");
    }
    if(chk){
        return res.status(400).send("Book name already exists");
    }
    await Books.create({"book_id":book_id,"name":name,"genre":genre,"availability":availability,"price":price})
    res.status(200).send("Book added successfully");
})

const deleteBook=asynchandler(async(req,res)=>{
    let book_id=req.params.bookId;
    const chk=await Books.findOne({"book_id":book_id});
    if(!chk){
        return res.status(400).send("No Book exists on that id");
    }
    const msg=chk.name;
    await Books.deleteOne({"book_id":book_id})
    res.status(200).send(`${msg} book deleted successfully`)
})

const updateBook=asynchandler(async(req,res)=>{
    let {book_id,book_name,availability,price}=req.body;
    const chk=await Books.findOne({"book_id":book_id});
    if(!chk){
        return res.status(400).send("No Book exists on that id");
    }
    if(!book_name){
        book_name=chk.book_name;
    }
    if(!availability){
        availability=chk.availability;
    }
    if(!price){
        price=chk.price;
    }
    await Books.updateOne({"book_id":book_id},{$set:{"availability":availability,"book_name":book_name,"price":price}})
    res.status(200).send("Details updated successfully");
})

const getBook=asynchandler(async(req,res)=>{
    const msg=await Books.find({});
    if(!msg){
        return res.status(400).send("Sorry No Books available");
    }
    res.status(200).json(msg);
})

module.exports={login,addBook,deleteBook,updateBook,getBook}