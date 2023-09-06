import mongoose from "mongoose";

const categorySrvSchema = new mongoose.Schema(
  {
    categoryNameInv: {
      type: String,
    },
  }
 
);

export default mongoose.model("CategoryService", categorySrvSchema);