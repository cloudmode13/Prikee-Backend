import mongoose from 'mongoose';

const paidStatusSchema = new mongoose.Schema({
  cusInvNo: String,
  paidMode: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('PaidStatus', paidStatusSchema);
