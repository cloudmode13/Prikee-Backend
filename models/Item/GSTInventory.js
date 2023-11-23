import mongoose from 'mongoose';

const gstInventorySchema = new mongoose.Schema({
  invGST: {
    type: String,
  },
});

export default mongoose.model('GSTInventory', gstInventorySchema);
