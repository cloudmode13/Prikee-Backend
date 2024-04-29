import mongoose from 'mongoose';

const cdnReturnSchema = new mongoose.Schema({
  cdnNum: { type: String },
  cdnDate: { type: String },
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
      cgst: { type: String },
      cgstValue: { type: String },
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('CreditNote', cdnReturnSchema);
