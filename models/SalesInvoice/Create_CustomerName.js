import mongoose from 'mongoose';

const customerNameSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('CustomerName', customerNameSchema);
