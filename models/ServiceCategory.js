import mongoose from "mongoose";

const createSrvCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
  }
 
);

export default mongoose.model("CreateSrvCategory", createSrvCategorySchema);