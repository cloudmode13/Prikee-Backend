import mongoose from 'mongoose';

const clientModalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    mobileNumber: {
      type: String,
    },

    partyType: {
      type: String,
    },
    balance: {
      type: String,
    },
    gst: {
      type: String,
    },
    panNumber: {
      type: String,
    },
    billingAddress: {
      type: String,
    },
    shippingAddress: {
      type: String,
    },
    email: {
      type: String,
    },
    creditPeriod: {
      type: String,
    },
    creditLimit: {
      type: String,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);

const ClientModal = mongoose.model('ClientModal', clientModalSchema);

export default ClientModal;
