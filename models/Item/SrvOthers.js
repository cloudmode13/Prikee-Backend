import mongoose from "mongoose";

const srvOthersInvSchema = new mongoose.Schema(
  {
    serviceOthersName: {
      type: String,
    },
  }

);

export default mongoose.model("SrvOthersInv", srvOthersInvSchema);