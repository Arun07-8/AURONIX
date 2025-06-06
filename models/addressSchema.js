const mongoose=require("mongoose");
const {Schema}=mongoose;

const addressSchema=new Schema({
    userId:{
        tyep:Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    address:[{
        addressType:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        landmark:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true,
        },
        phone:{
            type:String,
            required:true,
        },
        altPhone:{
            type:String,
            required:false,
        }
    }]
})

const Address=mongoose.model("Address",addressSchema);
module.exports=Address;