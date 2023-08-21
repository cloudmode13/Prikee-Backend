import mongoose from "mongoose";

const partiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
 
    },

    category: {
      type: String,
     
    },
    mobilenumber: {
        type: String,
      
      },
  
      party_type: {
        type: String,
        
      },
      balance: {
        type: String,
       
      },
      gst:{
        type:String,
      },
      pannumber:{
        type:String
      },
      billingaddress:{
        type:String
      },
      shippingaddress:{
        type:String
      },
      email:{
        type:String
      },
      creditperiod:{
        type:String
      },
      creditlimit:{
        type:String
      }

     
  }
 
);

export default mongoose.model("Parties", partiesSchema);