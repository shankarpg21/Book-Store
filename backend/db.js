const mongoose=require('mongoose');

const conn=async()=>{
    try{
        const connection=await mongoose.connect(process.env.URL);
        console.log("Connection established to database");
    }
    catch(e){
        console.log(e);
    }
}

module.exports=conn