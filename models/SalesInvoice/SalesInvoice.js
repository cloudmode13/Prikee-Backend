import mongoose from 'mongoose';

const salesInvoiceSchema = new mongoose.Schema({
  clientName: {
    type: String,
  },
  invoiceNumber: {
    type: String,
  },
  orderNumber: {
    type: String,
  },
  invoiceDate: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  salesRep: {
    type: String,
  },
  PONumber: {
    type: String,
  },
  PODate: {
    type: String,
  },
  remarks: {
    type: String,
  },
  subject: {
    type: String,
  },
  terms: { type: String },
  inventoryItem: [
    {
      itemName: String,
      itemCode: String,
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
  paidMode: String,
  gst: { type: String },
  cgst: { type: String },
  cgstValue: { type: String },
});

export default mongoose.model('SalesInvoice', salesInvoiceSchema);
