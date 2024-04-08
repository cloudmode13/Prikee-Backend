import mongoose from 'mongoose';

const purchaseReturnSchema = new mongoose.Schema({
  returnDate: {
    type: String,
  },
  reason: {
    type: String,
  },
  returnData: {
    vendorName: {
      type: String,
    },
    purchaseInvoiceNumber: {
      type: String,
    },
    purchaseDate: {
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
    total: { type: String },
    subTotal: { type: String },
    gst: { type: String },
    cgst: { type: String },
    cgstValue: { type: String },
  },
});

export default mongoose.model('PurchaseReturn', purchaseReturnSchema);
