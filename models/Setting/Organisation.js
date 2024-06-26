import mongoose from 'mongoose';

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  mobileNumber: {
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
  imagePath: {
    type: String,
  },
  website: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Organisation', organisationSchema);
