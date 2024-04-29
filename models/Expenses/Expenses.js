import mongoose from 'mongoose';

const expensesSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  paidTo: {
    type: String,
  },
  date: {
    type: String,
  },
  amount: {
    type: String,
  },
  remarks: {
    type: String,
  },
  paidMode: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Expenses', expensesSchema);
