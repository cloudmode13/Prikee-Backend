import mongoose from 'mongoose';

const purchaseOrderSchema = new mongoose.Schema({
  vendorName: {
    type: String,
  },
  purchaseOrderNumber: {
    type: String,
  },
  poDate: {
    type: String,
  },
  remarks: {
    type: String,
  },
  items: [
    {
      itemName: String,
      quantity: String,
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('PurchaseOrder', purchaseOrderSchema);
