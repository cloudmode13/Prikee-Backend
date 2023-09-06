import mongoose from "mongoose";

const srvOthersInvSchema = new mongoose.Schema(
  {
    othersName: {
      type: String,
    },
  }

);

export default mongoose.model("SrvOthersInv", srvOthersInvSchema);