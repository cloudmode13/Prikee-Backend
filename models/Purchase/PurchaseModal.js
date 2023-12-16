import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  vendorName: {
    type: String,
  },
  purchaseOrderNumber: {
    type: String,
  },
  purchaseDate: {
    type: String,
  },
  remarks: {
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
  subTotal: {
    type: String,
  },
  purchasedGst: {
    type: String,
  },
  total: {
    type: String,
  },
});

export default mongoose.model('Purchase', purchaseSchema);
