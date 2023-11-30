import mongoose from 'mongoose';

const paidStatusSchema = new mongoose.Schema({
  cusInvNo: String,
  paidMode: {
    type: String,
  },
});

export default mongoose.model('PaidStatus', paidStatusSchema);
