import mongoose from "mongoose";

const partiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
    mobilenumber: {
        type: String,
        required: true,
      },
  
      party_type: {
        type: String,
        required: true,
      },
      balance: {
        type: String,
        required: true,
      },
  
     
  }
 
);

export default mongoose.model("Parties", partiesSchema);