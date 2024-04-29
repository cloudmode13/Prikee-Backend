import mongoose from 'mongoose';

const salesPersonSchema = new mongoose.Schema({
  salesPerson: {
    type: String,
  },
  designation: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('SalesPerson', salesPersonSchema);
