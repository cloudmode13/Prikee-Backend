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
  
      serviceDescription: {
        type: String,
        
      },
      // customField:[
      //   {
      //     serviceHsn: {
      //           type:String
      //       }
      //   }
      // ],
      serviceDetails:[
        {
            unit: {
                type:String
            },
           
        }
      ],
      pricingDetails:[
        {
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
      ],

    }
 
);


const Service = mongoose.model("serviceItemSchema", serviceItemSchema);

export default Service;

