import mongoose from 'mongoose';

const deliveryChallanSchema = new mongoose.Schema({
  delNoteNo: {
    type: String,
  },
  dcDate: {
    type: String,
  },
  dispatchThrough: {
    type: String,
  },
  destination: {
    type: String,
  },
  termsOfDelivery: {
    type: String,
  },
  dcData: {
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
    cgst: { type: String },
    cgstValue: { type: String },
  },
});

export default mongoose.model('DeliveryChallan', deliveryChallanSchema);
