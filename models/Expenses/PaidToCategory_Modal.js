import mongoose from 'mongoose';

const paidToCategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
});

export default mongoose.model('PaidToCategory', paidToCategorySchema);
