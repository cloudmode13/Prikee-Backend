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
  subTotal: { type: String },
  paidMode: String,
});

export default mongoose.model('SalesInvoice', salesInvoiceSchema);
