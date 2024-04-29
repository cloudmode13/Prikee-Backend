import mongoose from 'mongoose';

const paidToCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('PaidToCategory', paidToCategorySchema);
