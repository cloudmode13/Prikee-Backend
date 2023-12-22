import mongoose from 'mongoose';

const expensesSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  paidTo: {
    type: String,
  },
  amount: {
    type: String,
  },
  remarks: {
    type: String,
  },
});

export default mongoose.model('Expenses', expensesSchema);
