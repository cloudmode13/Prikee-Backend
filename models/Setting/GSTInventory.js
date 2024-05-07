import mongoose from 'mongoose';

const gstInventorySchema = new mongoose.Schema({
  invGST: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('GSTInventory', gstInventorySchema);
