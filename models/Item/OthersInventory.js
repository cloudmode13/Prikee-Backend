import mongoose from 'mongoose';

const othersInventorySchema = new mongoose.Schema({
  othersName: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('OthersInventory', othersInventorySchema);
