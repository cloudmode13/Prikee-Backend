import mongoose from 'mongoose';

const serviceImageSchema = new mongoose.Schema({
  serviceImagePath: {
    type: String,
  },
});

export default mongoose.model('ServiceImage', serviceImageSchema);
