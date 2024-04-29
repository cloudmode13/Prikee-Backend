import mongoose from 'mongoose';

const paymentOutSchema = new mongoose.Schema({
  vendorName: {
    type: String,
  },
  POVendorName: {
    type: String,
  },
  purchasedVendorName: {
    type: String,
  },
  voucherNumber: {
    type: String,
  },
  voucherDate: {
    type: String,
  },
  PONumber: {
    type: String,
  },
  PODate: {
    type: String,
  },
  purchasedNumber: {
    type: String,
  },
  purchasedDate: {
    type: String,
  },
  description: {
    type: String,
  },
  PODescription: {
    type: String,
  },
  purchasedDescription: {
    type: String,
  },
  amount: {
    type: String,
  },
  POAmount: {
    type: String,
  },
  purchasedAmount: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('PaymentOut', paymentOutSchema);
