const mongoose=require('mongoose');

const orderSchema=mongoose.Schema(
    {
        userName:{
            type:String
        },
        book_id:{
            type:String 
        },
        bookName:{
            type:String
        },
        price:{
            type:String
        }
    },
    {
        timeStamps:true
    }
)

module.exports=mongoose.model("Orders",orderSchema);