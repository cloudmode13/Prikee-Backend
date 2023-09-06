import mongoose from "mongoose";

const createCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
  }
 
);

export default mongoose.model("CreateCategory", createCategorySchema);