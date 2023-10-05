import mongoose from 'mongoose';

const productImageSchema = new mongoose.Schema({
  imagePath: {
    type: String,
  },
});

export default mongoose.model('ProductImage', productImageSchema);
