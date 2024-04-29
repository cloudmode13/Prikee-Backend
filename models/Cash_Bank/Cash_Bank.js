import mongoose from 'mongoose';

const cashBankSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  paidMode: {
    type: String,
  },
  amountIn: {
    type: String,
  },
  amountOut: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('CashBank', cashBankSchema);
