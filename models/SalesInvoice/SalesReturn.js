import mongoose from 'mongoose';

const salesReturnSchema = new mongoose.Schema({
  returnDate: {
    type: String,
  },
  reason: {
    type: String,
  },
  returnData: {
    clientName: {
      type: String,
    },
    invoiceNumber: {
      type: String,
    },
    invoiceDate: {
      type: String,
    },
    inventoryItem: [
      {
        itemName: String,
        salesPrice: String,
        salesGst: String,
        quantity: String,
        totalPrices: String,
        discount: String,
        finalAmount: String,
      },
    ],
    total: { type: String },
    subTotal: { type: String },
    gst: { type: String },
  },
});

export default mongoose.model('SalesReturn', salesReturnSchema);
