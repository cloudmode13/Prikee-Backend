import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  vendorName: {
    type: String,
  },
  purchaseInvoiceNumber: {
    type: String,
  },
  purchaseDate: {
    type: String,
  },
  remarks: {
    type: String,
  },
  itemsData: [
    {
      itemName: String,
      itemCode: String,
      quantity: String,
      purchasePrice: String,
    },
  ],
  subTotal: {
    type: String,
  },
  purchasedGst: {
    type: String,
  },
  total: {
    type: String,
  },
  cgst: { type: String },
  cgstValue: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Purchase', purchaseSchema);
