import mongoose from "mongoose";

const serviceItemSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
 
    },

    category: {
      type: String,
     
    },
   serviceCode: {
        type: String,
      
      },
  
      service_Description: {
        type: String,
        
      },
   
    serviceHsn: {
                type:String
            },
            unit: {
                type:String
            },
            salesPrice: {
                type:String
            },
           
            sacCode:{
                type:String
            },
            gst:{
                type:String
            },
    }
 
);


const Service = mongoose.model("serviceItemSchema", serviceItemSchema);

export default Service;

