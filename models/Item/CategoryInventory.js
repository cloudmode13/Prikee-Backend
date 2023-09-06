import mongoose from "mongoose";

const categoryInventorySchema = new mongoose.Schema(
  {
    categoryNameInv: {
      type: String,
    },
  }
 
);

export default mongoose.model("CategoryInventory", categoryInventorySchema);