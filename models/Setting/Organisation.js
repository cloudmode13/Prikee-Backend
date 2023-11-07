import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNmuber: {
    type: String,
  },
  mobileNUmber: {
    type: String,
  },
  GSTIN: {
    type: String,
  },
  email: {
    type: String,
  },
  bankName: {
    type: String,
  },
  accountNo: {
    type: String,
  },
  branch: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  panNumber: {
    type: String,
  },
});

export default mongoose.model("Organisation", organisationSchema);
