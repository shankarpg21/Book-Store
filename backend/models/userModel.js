const mongoose=require('mongoose');
const userSchema=mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true,"Please add the name"],
            unique:{true:"Admin Name already exists"}
        },
        password:{
            type:String,
            required:[true,"Please add the name"],
        }
    },
    {
        timeStamps:true
    }
)

module.exports=mongoose.model("User",userSchema)