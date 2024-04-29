import mongoose from 'mongoose';

const quoNumSchema = new mongoose.Schema({
  currentNo: {
    type: String,
  },
  newNumber: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('QuoNum', quoNumSchema);
