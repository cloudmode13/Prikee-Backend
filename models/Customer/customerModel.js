import mongoose from "mongoose";

const customerModalSchema = new mongoose.Schema(
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


const CustomerModal = mongoose.model("CustomerModal", customerModalSchema);

export default CustomerModal;

