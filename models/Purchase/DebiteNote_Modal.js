import mongoose from 'mongoose';

const debitNoteSchema = new mongoose.Schema({
  dbnNum: { type: String },
  dbnDate: { type: String },
  customerNotes: { type: String },
  termsandconditions: { type: String },
  returnData: {
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
  },
});

export default mongoose.model('DebitNote', debitNoteSchema);
