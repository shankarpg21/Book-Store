const mongoose=require('mongoose');

const bookingSchema=mongoose.Schema(
    {
        book_id:{
            type:String,
            required:[true,"Please add the name"],
            unique:{true:"Book name already exists"}
        },
        name:{
            type:String,
            required:[true,"Please add the name"],
            unique:{true:"Book name already exists"}
        },
        genre:{
            type:String,
            required:[true,"Please add the genre"]
        },
        availability:{
            type:Number,
            required:[true,"Please add the availability of books"]
        },
        price:{
            type:String,
            required:[true,"Please add the Price"]
        }
    },
    {
        timeStamps:true
    }
)

module.exports=mongoose.model("Book",bookingSchema)