import mongoose from 'mongoose';

const categoryInventorySchema = new mongoose.Schema({
  categoryNameInv: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('CategoryInventory', categoryInventorySchema);
