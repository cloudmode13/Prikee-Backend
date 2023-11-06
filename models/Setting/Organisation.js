import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
  },
  organisationAddress: {
    type: String,
  },
  organisationPhoneNmuber: {
    type: String,
  },
  organisationMobileNUmber: {
    type: String,
  },
  organisationGSTIN: {
    type: String,
  },
  organisationState: {
    type: String,
  },
  organisationCode: {
    type: String,
  },
  organisationEmail: {
    type: String,
  },
});

export default mongoose.model("Organisation", organisationSchema);
