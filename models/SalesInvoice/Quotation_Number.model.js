import mongoose from 'mongoose';

const quoNumSchema = new mongoose.Schema({
  currentNo: {
    type: String,
  },
  newNumber: {
    type: String,
  },
});

export default mongoose.model('QuoNum', quoNumSchema);
