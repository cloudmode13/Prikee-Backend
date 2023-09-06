import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
});

const Demo = mongoose.model("Demo", demoSchema);

export default Demo;
