import mongoose from 'mongoose';

const salesPersonSchema = new mongoose.Schema({
  salesPerson: {
    type: String,
  },
  designation: {
    type: String,
  },
});

export default mongoose.model('SalesPerson', salesPersonSchema);
