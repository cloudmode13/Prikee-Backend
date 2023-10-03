import mongoose from 'mongoose';

const customerNameSchema = new mongoose.Schema({
  customerName: {
    type: String,
  },
});

export default mongoose.model('CustomerName', customerNameSchema);
