import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
  categoryName: {
    type: Number,
  },
});

const Demo = mongoose.model("Demo", demoSchema);

export default Demo;
