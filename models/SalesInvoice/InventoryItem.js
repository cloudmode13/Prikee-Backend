import mongoose from 'mongoose';

const inventoryItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },

  itemCode: {
    type: String,
  },
  salesPrice: {
    type: String,
  },

  salesGst: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const InventoryItem = mongoose.model(
  'InventoryItemSchema',
  inventoryItemSchema,
);

export default InventoryItem;
