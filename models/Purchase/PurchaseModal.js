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
});

export default mongoose.model('Purchase', purchaseSchema);
