import mongoose from 'mongoose';

const quotationSchema = new mongoose.Schema({
  clientName: {
    type: String,
  },
  quotationNumber: {
    type: String,
  },
  orderNumber: {
    type: String,
  },
  quotationDate: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  salesRep: {
    type: String,
  },

  remarks: {
    type: String,
  },
  subject: {
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
});

export default mongoose.model('Quotation', quotationSchema);
