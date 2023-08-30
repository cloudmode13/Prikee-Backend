import mongoose from "mongoose";

const othersInventorySchema = new mongoose.Schema(
  {
    othersName: {
      type: String,
    },
  }
 
);

export default mongoose.model("OthersInventory", othersInventorySchema);