import mongoose from "mongoose"


const otpShema = new mongoose.Schema({
   
    number:{
        type:String
    },  
    otp:{
        type:String
    },
    createdAt:{type:Date, default:Date.now, index: {expires:300}}
}, {timestamps: true})


export default mongoose.model("OTP", otpShema);